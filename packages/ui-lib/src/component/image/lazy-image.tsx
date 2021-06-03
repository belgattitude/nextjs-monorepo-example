import type { ImgHTMLAttributes } from 'react';
import type { LazyLoadProps } from 'react-lazyload';
import { LazyImageReactLazyload } from './strategy/lazy-image-react-lazyload';
import { Asserts } from '@your-org/core-lib';

type BrowserLoadingProps = {
  strategy: 'browser';
  /** preferred img loading attribute, will be ignore in other strategies */
  imgLoading: ImgHTMLAttributes<HTMLImageElement>['loading'];
  imgProps: ImgHTMLAttributes<HTMLImageElement>;
  lazyLoadProps?: LazyLoadProps;
  children?: never;
};

type ReactLazyLoadProps = {
  strategy: 'react-lazyload';
  imgProps: ImgHTMLAttributes<HTMLImageElement>;
  lazyLoadProps?: LazyLoadProps;
  children?: never;
};

type Props = BrowserLoadingProps | ReactLazyLoadProps;

export const LazyImage: React.FC<Props> = (props: Props) => {
  const { strategy } = props;
  switch (strategy) {
    case 'react-lazyload':
      return (
        <LazyImageReactLazyload
          imgProps={props.imgProps}
          lazyLoadProps={props.lazyLoadProps}
        />
      );
    case 'browser':
      const { imgLoading, imgProps } = props as BrowserLoadingProps;
      const { alt, ...restProps } = imgProps;
      return <img alt={alt} loading={imgLoading} {...restProps} />;
    default:
      Asserts.never(strategy);
  }
};
