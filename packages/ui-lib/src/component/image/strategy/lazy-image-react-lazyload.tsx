import type { ImgHTMLAttributes } from 'react';
import LazyLoad, { LazyLoadProps } from 'react-lazyload';

type Props = {
  imgProps: ImgHTMLAttributes<HTMLImageElement>;
  lazyLoadProps?: LazyLoadProps;
  children?: never;
};

export const LazyImageReactLazyload: React.FC<Props> = (props: Props) => {
  const { imgProps, lazyLoadProps } = props;
  const { alt, ...restProps } = imgProps;
  return (
    <LazyLoad {...lazyLoadProps}>
      <img alt={alt} {...restProps} />
    </LazyLoad>
  );
};
