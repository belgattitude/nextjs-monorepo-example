import { useEffect, useState, type FC } from 'react';

type Props = {
  apiUrl: string;
  children?: never;
};

export const AsyncMessage: FC<Props> = (props) => {
  const [msg, setMsg] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(props.apiUrl)
      .then((res) => res.text())
      .then((data) => {
        setMsg(data);
        setIsLoading(false);
      })
      .catch((err: unknown) => {
        setError(err instanceof Error ? err.message : 'Unknown error');
        setIsLoading(false);
      });
  }, [props.apiUrl]);

  if (error) {
    return <span>Error: {error}</span>;
  }
  if (isLoading) {
    return <span>Loading</span>;
  }

  return <span>{msg}</span>;
};
