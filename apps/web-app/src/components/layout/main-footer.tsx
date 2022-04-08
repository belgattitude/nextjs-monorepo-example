import { Container, Typography } from '@mqs/ui-lib';
import GitHubIcon from '@mui/icons-material/GitHub';
import type { FC } from 'react';

export const MainFooter: FC = () => {
  return (
    <footer>
      <br />
      <br />
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
      <br />
      <br />
    </footer>
  );
};
