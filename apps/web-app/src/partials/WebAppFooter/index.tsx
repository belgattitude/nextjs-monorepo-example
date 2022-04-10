import { Box, Container, Typography, Divider, Stack } from '@mqs/ui-lib';
import { useTranslation } from 'next-i18next';

export default function WebAppFooter() {
  const { t } = useTranslation(['common']);

  return (
    <Box
      component="footer"
      sx={{ marginTop: 'auto', paddingY: 6, backgroundColor: 'primary.main' }}
    >
      <Container>
        <Stack spacing={1}>
          <Divider />
          <Stack direction="row" spacing={1}>
            <Typography variant="caption" color="white">
              {t('common:brand.name')}
            </Typography>
            <Typography variant="caption" color="white">
              {t('common:legal.privacyPolicy')}
            </Typography>
            <Typography variant="caption" color="white">
              {t('common:legal.termsOfService')}
            </Typography>
            <Typography variant="caption" color="white">
              {t('common:legal.feedback')}
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
