import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import type { FC } from 'react';

type Props = {
  children?: never;
};

export const HeroBlock: FC<Props> = () => {
  const { t } = useTranslation(['home', 'common']);

  return (
    <section className="text-gray-600 body-font">
      <div className="container flex flex-col items-center py-24 px-5 mx-auto md:flex-row">
        <div className="flex flex-col items-center mb-16 text-center md:items-start md:pr-16 md:mb-0 md:w-1/2 md:text-left lg:grow lg:pr-24">
          <h1 className="mb-4 text-3xl font-medium text-gray-900 sm:text-4xl title-font">
            Before they sold out&nbsp;
            <br className="hidden lg:inline-block" />
            readymade gluten
          </h1>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex py-2 px-6 text-lg text-white bg-indigo-500 hover:bg-indigo-600 rounded border-0 focus:outline-none">
              Button
            </button>
            <button className="inline-flex py-2 px-6 ml-4 text-lg text-gray-700 bg-gray-100 hover:bg-gray-200 rounded border-0 focus:outline-none">
              Button
            </button>
          </div>
        </div>
        <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
          <Image
            width={720}
            height={600}
            loading={'eager'}
            src={'/assets/annie-spratt-unsplash.jpg'}
            alt={'tailwind-ui-logo'}
            className="object-cover object-center rounded"
            layout={'responsive'}
          />
        </div>
      </div>
    </section>
  );
};
