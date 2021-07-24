import { isBrowser } from './is-browser';

type Options = {
  /** Note that is running on server side the cache will be disabled */
  enableCache: boolean;
};

type Cache = {
  imgLoading: boolean | null;
};

const defaultOptions = {
  enableCache: true,
};

export class BrowserSupport {
  private options: Options;
  private static cache: Cache = {
    imgLoading: null,
  };

  constructor(options: Options) {
    this.options = {
      ...defaultOptions,
      ...options,
      ...(!isBrowser()
        ? {
            enableCache: false,
          }
        : {}),
    };
  }
  /**
   * Whether the browser support image loading property
   */
  hasImgLoading = () => {
    if (this.options.enableCache && BrowserSupport.cache.imgLoading !== null) {
      return BrowserSupport.cache.imgLoading;
    }
    const imgLoading: boolean = 'loading' in document.createElement('img');
    if (this.options.enableCache) {
      BrowserSupport.cache.imgLoading = imgLoading;
    }
    return imgLoading;
  };
}
