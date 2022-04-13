import {
  AppBarTop,
  Box,
  IconButton,
  MenuIcon,
  MoreVertIcon,
  Typography,
} from '@mqs/ui-lib';
import type { MouseEventHandler } from 'react';
import useAppTranslation from '@/hooks/useAppTranslation';
import type { PageType } from 'types.d/next-pages';
import { WebAppBarTopTabs } from './partials';

export type WebAppBarTopProps = {
  pages?: Array<PageType>;
  onClickNavigationIcon?: MouseEventHandler<HTMLButtonElement>;
};

export default function WebAppBarTop({
  pages,
  onClickNavigationIcon,
}: WebAppBarTopProps) {
  const { t } = useAppTranslation();

  return (
    <AppBarTop position="sticky">
      <IconButton
        color="inherit"
        onClick={onClickNavigationIcon}
        size="large"
        sx={{ display: { md: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h5" component="span">
        {t('common:brand.name')}
      </Typography>
      <Box display="flex" flexGrow={1} justifyContent="end">
        {pages && <WebAppBarTopTabs pages={pages} />}
      </Box>
      <IconButton size="large" color="inherit" sx={{ display: 'none' }}>
        <MoreVertIcon />
      </IconButton>
    </AppBarTop>
  );
}
