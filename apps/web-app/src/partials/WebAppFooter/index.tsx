import { Box, Container, Typography, GitHubIcon } from '@mqs/ui-lib';

export default function WebAppFooter() {
  return (
    <Box component="footer" sx={{ paddingY: 6 }}>
      <Container>
        <a
          href={'https://github.com/mqschwanda/nextjs-monorepo'}
          target={'_blank'}
          rel={'noopener noreferrer'}
        >
          <Typography variant="caption">
            github.com/mqschwanda/nextjs-monorepo &nbsp;
            <GitHubIcon fontSize="inherit" />
          </Typography>
        </a>
      </Container>
    </Box>
  );
}
