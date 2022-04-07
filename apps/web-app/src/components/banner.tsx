import { Button } from '@mqs/ui-lib';
import { Speaker as SpeakerIcon, Close as XIcon } from '@mui/icons-material';
import type { FC } from 'react';

type Props = {
  children?: never;
};

export const Banner: FC<Props> = () => {
  return (
    <div className="bg-indigo-600">
      <div className="py-3 px-3 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex flex-1 items-center w-0">
            <span className="flex p-2 bg-indigo-800 rounded-lg">
              <SpeakerIcon className="w-6 h-6 text-white" aria-hidden="true" />
            </span>
            <p className="ml-3 font-medium text-white truncate">
              <span className="md:hidden">We announced a new product!</span>
              <span className="hidden md:inline">
                Big news! We're excited to announce a brand new product.
              </span>
            </p>
          </div>
          <div className="flex-shrink-0 order-3 sm:order-2 mt-2 sm:mt-0 w-full sm:w-auto">
            <Button variant="text" color="inherit" href="#">
              Learn more
            </Button>
          </div>
          <div className="flex-shrink-0 order-2 sm:order-3 sm:ml-3">
            <Button>
              <span className="sr-only">Dismiss</span>
              <XIcon className="w-6 h-6 text-white" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
