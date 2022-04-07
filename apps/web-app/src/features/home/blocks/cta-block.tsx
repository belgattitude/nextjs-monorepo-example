import { Button } from '@mqs/ui-lib';
import { Stack } from '@mui/material';
import type { FC } from 'react';

type Props = {
  children?: never;
};
export const CtaBlock: FC<Props> = () => {
  return (
    <div className="bg-gray-50">
      <div className="lg:flex lg:justify-between lg:items-center py-12 lg:py-16 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
          <span className="block">Ready to dive in?</span>
          <span className="block text-indigo-600">
            Start your free trial today.
          </span>
        </h2>
        <Stack direction="row" spacing={1}>
          <Button variant="contained" href="#">
            Get started
          </Button>
          <Button variant="contained" href="#">
            Learn more
          </Button>
        </Stack>
      </div>
    </div>
  );
};
