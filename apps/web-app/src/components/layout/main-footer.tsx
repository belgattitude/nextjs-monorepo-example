import { Box, Container, Typography } from '@mqs/ui-lib';
import GitHubIcon from '@mui/icons-material/GitHub';
import type { FC } from 'react';

export const MainFooter: FC = () => {
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
};
