import type { LinkProps as BaseLinkProps } from '@mqs/ui-lib';
import { Link as BaseLink } from '@mqs/ui-lib';
import type { LinkProps as NextLinkProps } from 'next/link';
import NextLink from 'next/link';
import type { RefObject } from 'react';
import { forwardRef, useMemo } from 'react';

export type LinkProps = NextLinkProps & BaseLinkProps;

type RefType =
  | ((instance: HTMLAnchorElement | null) => void)
  | RefObject<HTMLAnchorElement>
  | null
  | undefined;

export const Link = forwardRef(
  (
    {
      as,
      children,
      href,
      locale,
      passHref = true,
      prefetch = true,
      replace = false,
      scroll = false,
      shallow = false,
      ...anchorProps
    }: LinkProps,
    ref: RefType
  ) => {
    const prefectProps = useMemo(
      () =>
        prefetch === false
          ? {
              prefetch,
            }
          : {
              /* empty object */
            },
      [prefetch]
    );

    return (
      <NextLink
        as={as}
        href={href}
        locale={locale}
        passHref={passHref}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        {...prefectProps}
      >
        <BaseLink ref={ref} {...anchorProps}>
          {children}
        </BaseLink>
      </NextLink>
    );
  }
);

Link.displayName = 'Link';
