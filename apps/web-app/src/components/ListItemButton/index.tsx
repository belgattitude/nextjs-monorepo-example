import type { ListItemButtonProps as BaseListItemButtonProps } from '@mqs/ui-lib';
import { ListItemButton as BaseListItemButton } from '@mqs/ui-lib';
import type { LinkProps as NextLinkProps } from 'next/link';
import NextLink from 'next/link';
import type { RefObject } from 'react';
import { forwardRef, useMemo } from 'react';

export type LinkProps = NextLinkProps & BaseListItemButtonProps;

type RefType =
  | ((instance: HTMLDivElement | null) => void)
  | RefObject<HTMLDivElement>
  | null
  | undefined;

export const ListItemButton = forwardRef(
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
        <BaseListItemButton ref={ref} {...anchorProps}>
          {children}
        </BaseListItemButton>
      </NextLink>
    );
  }
);

ListItemButton.displayName = 'ListItemButton';
