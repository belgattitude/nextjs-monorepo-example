import { Popover, Transition } from '@headlessui/react';
import { MenuOpen, Close } from '@mui/icons-material';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { Fragment } from 'react';

type Props = {
  children?: never;
};

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

export const HeroBlock: React.FC<Props> = () => {
  const { t } = useTranslation(['home', 'common']);

  return (
    <div className="overflow-hidden relative bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 lg:w-full lg:max-w-2xl bg-white">
          <svg
            className="hidden lg:block absolute inset-y-0 right-0 w-48 h-full text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true">
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            {({ open }) => (
              <>
                <div className="relative px-4 sm:px-6 lg:px-8 pt-6">
                  <nav
                    className="flex relative justify-between lg:justify-start items-center sm:h-10"
                    aria-label="Global">
                    <div className="flex flex-grow lg:flex-grow-0 flex-shrink-0 items-center">
                      <div className="flex justify-between items-center w-full md:w-auto">
                        <a href="#">
                          <span className="sr-only">Workflow</span>
                          <img
                            alt={''}
                            className="w-auto h-8 sm:h-10"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                          />
                        </a>
                        <div className="flex md:hidden items-center -mr-2">
                          <Popover.Button className="inline-flex justify-center items-center p-2 text-gray-400 hover:text-gray-500 bg-white hover:bg-gray-100 rounded-md focus:ring-2 focus:ring-inset focus:ring-indigo-500 focus:outline-none">
                            <span className="sr-only">Open main menu</span>
                            <MenuOpen className="w-6 h-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block md:pr-4 md:ml-10 md:space-x-8">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="font-medium text-gray-500 hover:text-gray-900">
                          {item.name}
                        </a>
                      ))}
                      <a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500">
                        Log in
                      </a>
                    </div>
                  </nav>
                </div>

                <Transition
                  show={open}
                  as={Fragment}
                  enter="duration-150 ease-out"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="duration-100 ease-in"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95">
                  <Popover.Panel
                    focus
                    static
                    className="md:hidden absolute inset-x-0 top-0 p-2 transition transform origin-top-right">
                    <div className="overflow-hidden bg-white rounded-lg ring-1 ring-black ring-opacity-5 shadow-md">
                      <div className="flex justify-between items-center px-5 pt-4">
                        <div>
                          <img
                            className="w-auto h-8"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                            alt=""
                          />
                        </div>
                        <div className="-mr-2">
                          <Popover.Button className="inline-flex justify-center items-center p-2 text-gray-400 hover:text-gray-500 bg-white hover:bg-gray-100 rounded-md focus:ring-2 focus:ring-inset focus:ring-indigo-500 focus:outline-none">
                            <span className="sr-only">Close main menu</span>
                            <Close className="w-6 h-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                      <div className="px-2 pt-2 pb-3 space-y-1">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block py-2 px-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md">
                            {item.name}
                          </a>
                        ))}
                      </div>
                      <a
                        href="#"
                        className="block py-3 px-5 w-full font-medium text-center text-indigo-600 bg-gray-50 hover:bg-gray-100">
                        Log in
                      </a>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          <main className="px-4 sm:px-6 lg:px-8 mx-auto mt-10 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28 max-w-7xl">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
                <span className="block xl:inline">Data to enrich your</span>{' '}
                <span className="block xl:inline text-indigo-600">
                  online business
                </span>
              </h1>
              <p className="sm:mx-auto lg:mx-0 mt-3 sm:mt-5 md:mt-5 sm:max-w-xl text-base sm:text-lg md:text-xl text-gray-500">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className="sm:flex sm:justify-center lg:justify-start mt-5 sm:mt-8">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="flex justify-center items-center py-3 md:py-4 px-8 md:px-10 w-full text-base md:text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md border border-transparent">
                    {t('home:btn.getStarted')}
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="flex justify-center items-center py-3 md:py-4 px-8 md:px-10 w-full text-base md:text-lg font-medium text-indigo-700 bg-indigo-100 hover:bg-indigo-200 rounded-md border border-transparent">
                    {t('home:btn.liveDemo')}
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image
          src={'/assets/unsplash-photo-1551434678.jpg'}
          alt={'tailwind-ui-logo'}
          className="object-cover w-full lg:w-full h-56 sm:h-72 md:h-96 lg:h-full"
          layout={'fill'}
        />
      </div>
    </div>
  );
};
