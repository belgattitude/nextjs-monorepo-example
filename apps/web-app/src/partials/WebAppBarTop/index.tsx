import {
  AppBarTop,
  Box,
  IconButton,
  MenuIcon,
  MoreVertIcon,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from '@mqs/ui-lib';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { Link } from '@/components';
import useAppTranslation from '@/hooks/useAppTranslation';

export type WebAppBarTopProps = {
  pages?: Array<{
    href: string;
    label: string;
  }>;
};

export default function WebAppBarTop({ pages }: WebAppBarTopProps) {
  const router = useRouter();
  const theme = useTheme();
  const { t } = useAppTranslation();

  const tabValue = useMemo(() => {
    if (
      pages &&
      router &&
      pages.reduce(
        (current, page) => current || page.href == router.asPath,
        false
      )
    ) {
      return router.asPath;
    }

    return false;
  }, [router, pages]);

  const tabs = useMemo(
    () =>
      router &&
      pages && (
        <Tabs
          indicatorColor="secondary"
          selectionFollowsFocus={false}
          textColor="inherit"
          value={tabValue}
        >
          {pages.map(({ label, href }) => (
            <Tab
              color="inherit"
              LinkComponent={Link}
              href={href}
              key={href}
              label={label}
              sx={{ ...theme.mixins.toolbar }}
              value={href}
            />
          ))}
        </Tabs>
      ),
    [router, pages, theme.mixins.toolbar, tabValue]
  );

  return (
    <AppBarTop position="sticky">
      <IconButton size="large" color="inherit" sx={{ display: 'none' }}>
        <MenuIcon />
      </IconButton>
      <Typography>{t('common:brand.name')}</Typography>
      <Box display="flex" flexGrow={1} justifyContent="end">
        {tabs}
      </Box>
      <IconButton size="large" color="inherit" sx={{ display: 'none' }}>
        <MoreVertIcon />
      </IconButton>
    </AppBarTop>
  );
}
