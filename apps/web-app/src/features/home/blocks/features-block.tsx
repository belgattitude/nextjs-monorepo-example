import styled from '@emotion/styled';
import { Typography } from '@mqs/ui-lib';
import {
  AccessAlarm,
  Lightbulb,
  LinearScale,
  MobileFriendly,
} from '@mui/icons-material';
import type { FC } from 'react';

type Props = {
  children?: never;
};

const lorem =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.';

const features = [
  {
    name: 'Competitive exchange rates',
    description: lorem,
    icon: AccessAlarm,
  },
  {
    name: 'No hidden fees',
    description: lorem,
    icon: LinearScale,
  },
  {
    name: 'Transfers are instant',
    description: lorem,
    icon: Lightbulb,
  },
  {
    name: 'Mobile notifications',
    description: lorem,
    icon: MobileFriendly,
  },
];

const Ctn = styled.div`
  padding: 32px;
  background: rgb(131, 58, 180);
  background: linear-gradient(
    90deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(94, 70, 222, 1) 13%,
    rgba(252, 176, 69, 1) 100%
  );
`;

export const FeaturesBlock: FC<Props> = () => {
  return (
    <Ctn>
      <div className="py-12 bg-white" style={{ width: '100%' }}>
        <div className="px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
          <div className="lg:text-center">
            <Typography color="primary" variant="h4">
              Transactions
            </Typography>
            <Typography variant="body1">A better way to send money</Typography>
            <Typography variant="caption">{lorem}</Typography>
          </div>

          <div className="mt-10">
            <dl className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 space-y-10 md:space-y-0">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="flex absolute justify-center items-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                      <feature.icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <Typography ml="4rem">{feature.name}</Typography>
                  </dt>
                  <dd className="mt-2 ml-16">
                    <Typography variant="caption">
                      {feature.description}
                    </Typography>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Ctn>
  );
};
