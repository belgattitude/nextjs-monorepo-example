import { Box, Container, Divider, Stack, Typography } from '@mqs/ui-lib';
import { Link } from '@/components';
import useAppTranslation from '@/hooks/useAppTranslation';

export default function WebAppFooter() {
  const { t } = useAppTranslation();

  return (
    <Box
      component="footer"
      sx={{ marginTop: 'auto', paddingY: 6, backgroundColor: 'primary.main' }}
    >
      <Container>
        <Stack spacing={1}>
          <Box maxWidth="420px">
            <Typography variant="caption" color="#fff">
              {t('common:loreum')}
            </Typography>
          </Box>
          <Divider />
          <Stack direction="row" spacing={1}>
            <Typography variant="body1" color="#fff" lineHeight="24px">
              {t('common:brand.name')}
            </Typography>
            <Link variant="caption" color="#fff" href="#" lineHeight="24px">
              {t('common:legal.privacyPolicy')}
            </Link>
            <Link variant="caption" color="#fff" href="#" lineHeight="24px">
              {t('common:legal.termsOfService')}
            </Link>
            <Link variant="caption" color="#fff" href="#" lineHeight="24px">
              {t('common:legal.feedback')}
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
