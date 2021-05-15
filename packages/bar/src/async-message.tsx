import { FC, useEffect, useState } from 'react';
import { Message } from './message';

type Props = {
  apiUrl: string;
  children?: never;
};

export const AsyncMessage: FC<Props> = (props) => {
  const [msg, setMsg] = useState<string>('...');
  useEffect(() => {
    fetch(props.apiUrl)
      .then((res) => res.text())
      .then((res) => {
        setMsg(res);
      });
  });
  return <Message message={msg} />;
};
