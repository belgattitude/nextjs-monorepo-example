import { css } from '@emotion/react';
import { sayHello } from '@your-org/core-lib';
import { Message } from '@your-org/ui-lib';
// Does not work
// https://github.com/remix-run/remix/issues/1405
// import { GradientText } from '@your-org/ui-lib/ux/text/GradientText';

function App() {
  return (
    <div>
      <h1 className="text-6xl font-bold text-red-700">Hello World!</h1>
      <h3
        css={css`
          font-size: 3em;
          font-weight: 800;
        `}
      >
        I'm the remix-app
      </h3>
      <p>
        {/*
        <GradientText
          css={css`
            font-size: 3em;
            font-weight: 800;
          `}
        >
          Hello
        </GradientText>
        */}
      </p>
      <p>{`${sayHello('Hello Remix')} from @your-org/core-lib`}</p>
      <p>
        <Message message={'React component from @your-org/ui-lib'} />
      </p>
    </div>
  );
}

export default App;
