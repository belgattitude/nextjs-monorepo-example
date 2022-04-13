import { Box, Container, Divider, Stack, Typography } from '@mqs/ui-lib';
import { Link } from '@/components';
import useAppTranslation from '@/hooks/useAppTranslation';
import type { PageType } from 'types.d/next-pages';

export type WebAppFooterProps = {
  subpages?: Array<PageType>;
};

export default function WebAppFooter({ subpages }: WebAppFooterProps) {
  const { t } = useAppTranslation();

  return (
    <Box
      component="footer"
      sx={{ marginTop: 'auto', paddingY: 6, backgroundColor: 'primary.main' }}
    >
      <Container>
        <Stack spacing={1}>
          <Box maxWidth="420px">
            <Typography variant="caption" color="primary.contrastText">
              {t('common:loreum')}
            </Typography>
          </Box>
          <Divider />
          <Stack direction="row" spacing={1}>
            <Typography
              color="primary.contrastText"
              component="span"
              lineHeight="24px"
              variant="h5"
            >
              {t('common:brand.name')}
            </Typography>
            {subpages?.map(({ label, href }) => (
              <Link
                color="primary.contrastText"
                href={href}
                key={href}
                lineHeight="24px"
                variant="caption"
              >
                {label}
              </Link>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
