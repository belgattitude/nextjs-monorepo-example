// import { useTranslation } from 'next-i18next';
import { Button } from '@mqs/ui-lib';
import { Stack } from '@mui/material';
import Image from 'next/image';
import type { FC } from 'react';

type Props = {
  children?: never;
};

export const HeroBlock: FC<Props> = () => {
  // const { t } = useTranslation(['home', 'common']);

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
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
          <Stack direction="row" spacing={1}>
            <Button variant="contained" color="primary">
              Button
            </Button>
            <Button variant="contained" color="secondary">
              Button
            </Button>
          </Stack>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
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
