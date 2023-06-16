import { type I18nActiveNamespaces } from '@/lib/i18n/I18nNamespace.types';

/**
 * Ensure that the i18nNamespaces are sorted alphabetically when passed in feature configs.
 * That should help typescript when compatible groups (ie ['common', 'home'] and ['home', 'common'])
 * should not produce a different union type.
 *
 * @throws Error if the namespaces are not sorted alphabetically.
 */
export const getSortedI18nNamespaces = <T extends I18nActiveNamespaces>(
  ns: T
) => {
  if ([...ns].sort((a, b) => a.localeCompare(b)).toString() !== ns.toString()) {
    throw new Error(
      `Config error: i18nNamespaces should be sorted for best performance ${JSON.stringify(
        ns
      )}`
    );
  }
  return ns;
};
