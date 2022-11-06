import { defaultConfig } from './defaultConfig';
import { getFallbackForLng, unique } from '../utils';
const deepMergeObjects = ['backend', 'detection'];
export const createConfig = userConfig => {
  if (typeof userConfig?.lng !== 'string') {
    throw new Error('config.lng was not passed into createConfig');
  }

  //
  // Initial merge of default and user-provided config
  //
  const {
    i18n: userI18n,
    ...userConfigStripped
  } = userConfig;
  const {
    i18n: defaultI18n,
    ...defaultConfigStripped
  } = defaultConfig;
  const combinedConfig = {
    ...defaultConfigStripped,
    ...userConfigStripped,
    ...defaultI18n,
    ...userI18n
  };
  const {
    defaultNS,
    lng,
    localeExtension,
    localePath,
    localeStructure,
    nonExplicitSupportedLngs
  } = combinedConfig;
  const locales = combinedConfig.locales.filter(l => l !== 'default');

  /**
   * Skips translation file resolution while in cimode
   * https://github.com/i18next/next-i18next/pull/851#discussion_r503113620
  */
  if (lng === 'cimode') {
    return combinedConfig;
  }
  if (typeof combinedConfig.fallbackLng === 'undefined') {
    combinedConfig.fallbackLng = combinedConfig.defaultLocale;
    if (combinedConfig.fallbackLng === 'default') [combinedConfig.fallbackLng] = locales;
  }
  const {
    fallbackLng
  } = combinedConfig;
  if (nonExplicitSupportedLngs) {
    const createFallbackObject = (acc, l) => {
      const [locale] = l.split('-');
      acc[l] = [locale];
      return acc;
    };
    if (typeof fallbackLng === 'string') {
      combinedConfig.fallbackLng = combinedConfig.locales.filter(l => l.includes('-')).reduce(createFallbackObject, {
        default: [fallbackLng]
      });
    } else if (Array.isArray(fallbackLng)) {
      combinedConfig.fallbackLng = combinedConfig.locales.filter(l => l.includes('-')).reduce(createFallbackObject, {
        default: fallbackLng
      });
    } else if (typeof fallbackLng === 'object') {
      combinedConfig.fallbackLng = Object.entries(combinedConfig.fallbackLng).reduce((acc, [l, f]) => {
        acc[l] = l.includes('-') ? unique([l.split('-')[0], ...f]) : f;
        return acc;
      }, fallbackLng);
    } else if (typeof fallbackLng === 'function') {
      throw new Error('If nonExplicitSupportedLngs is true, no functions are allowed for fallbackLng');
    }
  }
  const hasCustomBackend = userConfig?.use?.some(b => b.type === 'backend');
  if (!process.browser && typeof window === 'undefined') {
    combinedConfig.preload = locales;
    if (!hasCustomBackend) {
      const fs = require('fs');
      const path = require('path');

      //
      // Validate defaultNS
      // https://github.com/i18next/next-i18next/issues/358
      //
      if (typeof defaultNS === 'string' && typeof lng !== 'undefined') {
        if (typeof localePath === 'string') {
          const prefix = userConfig?.interpolation?.prefix ?? '{{';
          const suffix = userConfig?.interpolation?.suffix ?? '}}';
          const defaultLocaleStructure = localeStructure.replace(`${prefix}lng${suffix}`, lng).replace(`${prefix}ns${suffix}`, defaultNS);
          const defaultFile = `/${defaultLocaleStructure}.${localeExtension}`;
          const defaultNSPath = path.join(localePath, defaultFile);
          const defaultNSExists = fs.existsSync(defaultNSPath);
          const fallback = getFallbackForLng(lng, combinedConfig.fallbackLng);
          const defaultFallbackNSExists = fallback.some(f => {
            const fallbackFile = defaultFile.replace(lng, f);
            const defaultNSPath = path.join(localePath, fallbackFile);
            return fs.existsSync(defaultNSPath);
          });
          if (!defaultNSExists && !defaultFallbackNSExists && process.env.NODE_ENV !== 'production') {
            throw new Error(`Default namespace not found at ${defaultNSPath}`);
          }
        } else if (typeof localePath === 'function') {
          const defaultNSPath = localePath(lng, defaultNS, false);
          const defaultNSExists = fs.existsSync(defaultNSPath);
          const fallback = getFallbackForLng(lng, combinedConfig.fallbackLng);
          const defaultFallbackNSExists = fallback.some(f => {
            const defaultNSPath = localePath(f, defaultNS, false);
            return fs.existsSync(defaultNSPath);
          });
          if (!defaultNSExists && !defaultFallbackNSExists && process.env.NODE_ENV !== 'production') {
            throw new Error(`Default namespace not found at ${defaultNSPath}`);
          }
        }
      }

      //
      // Set server side backend
      //
      if (typeof localePath === 'string') {
        combinedConfig.backend = {
          addPath: path.resolve(process.cwd(), `${localePath}/${localeStructure}.missing.${localeExtension}`),
          loadPath: path.resolve(process.cwd(), `${localePath}/${localeStructure}.${localeExtension}`)
        };
      } else if (typeof localePath === 'function') {
        combinedConfig.backend = {
          addPath: (locale, namespace) => localePath(locale, namespace, true),
          loadPath: (locale, namespace) => localePath(locale, namespace, false)
        };
      } else {
        throw new Error(`Unsupported localePath type: ${typeof localePath}`);
      }

      //
      // Set server side preload (namespaces)
      //
      if (!combinedConfig.ns && typeof lng !== 'undefined') {
        if (typeof localePath === 'function') {
          throw new Error('Must provide all namespaces in ns option if using a function as localePath');
        }
        const getNamespaces = locales => {
          const getLocaleNamespaces = p => {
            let ret = [];
            if (!fs.existsSync(p)) return ret;
            fs.readdirSync(p).map(file => {
              const joinedP = path.join(p, file);
              if (fs.statSync(joinedP).isDirectory()) {
                const subRet = getLocaleNamespaces(joinedP).map(n => `${file}/${n}`);
                ret = ret.concat(subRet);
                return;
              }
              ret.push(file.replace(`.${localeExtension}`, ''));
            });
            return ret;
          };
          const namespacesByLocale = locales.map(locale => getLocaleNamespaces(path.resolve(process.cwd(), `${localePath}/${locale}`)));
          const allNamespaces = [];
          for (const localNamespaces of namespacesByLocale) {
            allNamespaces.push(...localNamespaces);
          }
          return unique(allNamespaces);
        };
        combinedConfig.ns = getNamespaces(unique([lng, ...getFallbackForLng(lng, combinedConfig.fallbackLng)]));
      }
    }
  } else {
    //
    // Set client side backend, if there is no custom backend
    //
    if (!hasCustomBackend) {
      if (typeof localePath === 'string') {
        combinedConfig.backend = {
          addPath: `${localePath}/${localeStructure}.missing.${localeExtension}`,
          loadPath: `${localePath}/${localeStructure}.${localeExtension}`
        };
      } else if (typeof localePath === 'function') {
        combinedConfig.backend = {
          addPath: (locale, namespace) => localePath(locale, namespace, true),
          loadPath: (locale, namespace) => localePath(locale, namespace, false)
        };
      }
    }
    if (typeof combinedConfig.ns !== 'string' && !Array.isArray(combinedConfig.ns)) {
      combinedConfig.ns = [defaultNS];
    }
  }

  //
  // Deep merge with overwrite - goes last
  //
  deepMergeObjects.forEach(obj => {
    if (userConfig[obj]) {
      combinedConfig[obj] = {
        ...combinedConfig[obj],
        ...userConfig[obj]
      };
    }
  });
  return combinedConfig;
};