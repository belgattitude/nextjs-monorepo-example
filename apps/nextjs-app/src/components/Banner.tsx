import { Speaker as SpeakerIcon, Close as XIcon } from '@mui/icons-material';
import type { FC } from 'react';

type Props = {
  children?: never;
};

export const Banner: FC<Props> = () => {
  return (
    <div className="bg-indigo-600">
      <div className="p-3 mx-auto max-w-7xl sm:px-6 lg:px-8">
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
          <div className="shrink-0 order-3 mt-2 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <a
              href="#"
              className="flex justify-center items-center py-2 px-4 text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50 rounded-md border border-transparent shadow-sm"
            >
              Learn more
            </a>
          </div>
          <div className="shrink-0 order-2 sm:order-3 sm:ml-3">
            <button
              type="button"
              className="flex p-2 -mr-1 hover:bg-indigo-500 rounded-md focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            >
              <span className="sr-only">Dismiss</span>
              <XIcon className="w-6 h-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
