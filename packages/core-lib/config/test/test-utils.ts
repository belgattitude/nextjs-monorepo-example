import { cleanup, render } from '@testing-library/react';
import type React from 'react';

import { afterEach } from 'vitest';

// The condition below is only needed to support both jest and vitest.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
if (afterEach) {
  afterEach(() => {
    cleanup();
  });
}

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => children,
    ...options,
  });

// eslint-disable-next-line import-x/export
export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
// override render export
// eslint-disable-next-line import-x/export
export { customRender as render };
