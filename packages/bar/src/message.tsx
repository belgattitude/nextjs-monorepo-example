import { FC } from 'react';

type Props = {
  message: string;
  children?: never;
};

export const Message: FC<Props> = (props) => <span>{props.message}</span>;
