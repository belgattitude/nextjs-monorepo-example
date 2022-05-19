import type { FC } from 'react';

type Props = {
  children?: never;
};
export const CtaBlock: FC<Props> = () => {
  return (
    <div className="bg-gray-50">
      <div className="py-12 px-4 mx-auto max-w-7xl sm:px-6 lg:flex lg:justify-between lg:items-center lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-indigo-600">
            Start your free trial today.
          </span>
        </h2>
        <div className="flex mt-8 lg:shrink-0 lg:mt-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md border border-transparent"
            >
              Get started
            </a>
          </div>
          <div className="inline-flex ml-3 rounded-md shadow">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-indigo-600 bg-white hover:bg-indigo-50 rounded-md border border-transparent"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
