import {
  Box,
  Divider,
  Drawer,
  List,
  ListItemText,
  ListItemIcon,
  IconButton,
  Toolbar,
  ChevronLeftIcon,
} from '@mqs/ui-lib';
import type { DrawerProps } from '@mqs/ui-lib';
import { useRouter } from 'next/router';
import { ListItemButton } from '@/components/ListItemButton';
import useWebAppUiContext from '@/hooks/useWebAppUiContext';
import type { PageType } from 'types.d/next-pages';

export type WebAppNavigationDrawerProps = DrawerProps & {
  width?: string | number;
  pages?: Array<PageType>;
  subpages?: Array<PageType>;
};

export default function WebAppNavigationDrawer({
  PaperProps,
  anchor = 'left',
  onClose,
  open,
  pages,
  subpages,
  width,
  ...props
}: WebAppNavigationDrawerProps) {
  const router = useRouter();
  const { isWebAppDrawerPermanent } = useWebAppUiContext();

  return (
    <Drawer
      PaperProps={{ ...PaperProps, sx: { ...PaperProps?.sx, width } }}
      anchor={anchor}
      onClose={onClose}
      open={open}
      {...props}
    >
      <Toolbar sx={{ justifyContent: 'end' }}>
        {!isWebAppDrawerPermanent && onClose && (
          <IconButton onClick={(event) => onClose(event, 'backdropClick')}>
            <ChevronLeftIcon />
          </IconButton>
        )}
      </Toolbar>
      <Divider />
      <Box role="presentation">
        {pages && (
          <List>
            {pages.map(({ label, href, icon }) => (
              <ListItemButton
                href={href}
                key={href}
                selected={href === router.asPath}
              >
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText inset={!icon} primary={label} />
              </ListItemButton>
            ))}
          </List>
        )}
        {pages && subpages && <Divider />}
        {subpages && (
          <List>
            {subpages.map(({ label, href, icon }) => (
              <ListItemButton key={href} href={href} dense>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText inset={!icon} primary={label} />
              </ListItemButton>
            ))}
          </List>
        )}
      </Box>
    </Drawer>
  );
}
