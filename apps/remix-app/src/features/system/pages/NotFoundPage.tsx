import type { FC } from 'react';

type Props = {
  title?: string;
  children?: never;
};

export const NotFoundPage: FC<Props> = (props) => {
  const title = props.title || 'Not Found';
  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen h-screen bg-white">
        <h1
          data-testid="not-found-title"
          className="text-5xl text-black md:text-4xl lg:text-5xl"
        >
          {title}
        </h1>
        <p className="text-center mt-5 no-underline hover:underline text-xl">
          <a href={'/'}>Back to home</a>
        </p>
      </div>
    </>
  );
};
