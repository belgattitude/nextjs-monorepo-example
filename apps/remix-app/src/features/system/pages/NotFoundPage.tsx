import type { FC } from 'react';

type Props = {
  title?: string;
  children?: never;
};

export const NotFoundPage: FC<Props> = (props) => {
  const title = props.title || 'Not Found';
  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen h-screen bg-white">
        <h1
          data-testid="not-found-title"
          className="text-5xl text-black md:text-4xl lg:text-5xl"
        >
          {title}
        </h1>
        <p className="mt-5 text-xl text-center no-underline hover:underline">
          <a href={'/'}>Back to home</a>
        </p>
      </div>
    </>
  );
};
