import { Tab, Tabs, useTheme } from '@mqs/ui-lib';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { Link } from '@/components';
import type { PageType } from 'types.d/next-pages';

export type WebAppBarTopTabsProps = {
  pages: Array<PageType>;
};

export default function WebAppBarTopTabs({ pages }: WebAppBarTopTabsProps) {
  const router = useRouter();
  const theme = useTheme();
  const value = useMemo(() => {
    if (
      pages.reduce(
        (current, page) => current || page.href === router.asPath,
        false
      )
    ) {
      return router.asPath;
    }

    return false;
  }, [router, pages]);

  return (
    <Tabs
      indicatorColor="secondary"
      selectionFollowsFocus={false}
      textColor="inherit"
      value={value}
    >
      {pages.map(({ label, href, icon }) => (
        <Tab
          LinkComponent={Link}
          color="inherit"
          href={href}
          icon={icon}
          iconPosition="start"
          key={href}
          label={label}
          sx={{ ...theme.mixins.toolbar }}
          value={href}
        />
      ))}
    </Tabs>
  );
}
