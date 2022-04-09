import type { FC } from 'react';

type Props = {
  originatingAppName: string;
  children?: never;
};
export const InfoCard: FC<Props> = (props) => {
  const { originatingAppName } = props;
  return (
    <div>
      <img src="img_avatar.png" alt="Avatar" style={{ width: '100%' }} />
      <div>
        <h4>
          <strong>John Doe</strong>
        </h4>
        <p>{originatingAppName}</p>
      </div>
    </div>
  );
};
