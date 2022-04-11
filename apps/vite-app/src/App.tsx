import { css } from '@emotion/react';
import { sayHello } from '@your-org/core-lib';
import { Message } from '@your-org/ui-lib';
import { GradientText } from '@your-org/ui-lib/ux';
import { useState } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <main className="App-header">
        <p>
          <GradientText
            css={css`
              font-size: 3em;
              font-weight: 800;
            `}
          >
            Hello
          </GradientText>
        </p>
        <p>{`${sayHello('Hello Vite')} from @your-org/core-lib`}</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          <Message message={'React component from @your-org/ui-lib'} />
        </p>
      </main>
    </div>
  );
}

export default App;
