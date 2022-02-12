import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { Message } from './message';

type Props = {
  apiUrl: string;
  children?: never;
};

export const AsyncMessage: FC<Props> = (props) => {
  const [data, setData] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(props.apiUrl)
      .then((res) => res.text())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [props.apiUrl]);

  return <Message message={isLoading ? '...' : data ?? 'error'} />;
};

export const AsyncMessage1: FC<Props> = (props) => {
  const [msg, setMsg] = useState<string>('...');
  useEffect(() => {
    fetch(props.apiUrl)
      .then((res) => res.text())
      .then((res) => {
        setMsg(res);
      });
  }, [props.apiUrl]);
  return <Message message={msg} />;
};
