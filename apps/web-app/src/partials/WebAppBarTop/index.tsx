import {
  AppBarTop,
  Box,
  IconButton,
  MenuIcon,
  MoreVertIcon,
  Tab,
  Tabs,
  useTheme,
} from '@mqs/ui-lib';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { Link } from '../../components';

export type WebAppBarTopProps = {
  pages?: Array<{
    href: string;
    label: string;
  }>;
};

export default function WebAppBarTop({ pages }: WebAppBarTopProps) {
  const router = useRouter();
  const theme = useTheme();

  const tabs = useMemo(
    () =>
      router &&
      pages && (
        <Tabs
          indicatorColor="secondary"
          selectionFollowsFocus={false}
          textColor="inherit"
          value={router.pathname}
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
    [router, pages, theme.mixins.toolbar]
  );

  return (
    <AppBarTop position="sticky">
      <IconButton size="large" color="inherit">
        <MenuIcon />
      </IconButton>
      <Box display="flex" flexGrow={1} justifyContent="end">
        {tabs}
      </Box>
      <IconButton size="large" color="inherit">
        <MoreVertIcon />
      </IconButton>
    </AppBarTop>
  );
}
