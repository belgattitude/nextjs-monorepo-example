import type { ListItemProps as BaseListItemProps } from '@mqs/ui-lib';
import { ListItem as BaseListItem } from '@mqs/ui-lib';
import type { LinkProps as NextLinkProps } from 'next/link';
import NextLink from 'next/link';
import type { RefObject } from 'react';
import { forwardRef, useMemo } from 'react';

export type LinkProps = NextLinkProps & BaseListItemProps;

type RefType =
  | ((instance: HTMLLIElement | null) => void)
  | RefObject<HTMLLIElement>
  | null
  | undefined;

export const ListItem = forwardRef(
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
        <BaseListItem ref={ref} {...anchorProps}>
          {children}
        </BaseListItem>
      </NextLink>
    );
  }
);

ListItem.displayName = 'ListItem';
