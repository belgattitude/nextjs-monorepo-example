import '@testing-library/jest-dom';

// Hack for vitest 0.25.2 / happy-dom. Keep till those issues are fixed
// - https://github.com/vitest-dev/vitest/issues/2305#issuecomment-1311420462
// - https://github.com/capricorn86/happy-dom/issues/569
import { URL } from 'node:url';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(globalThis as any).URL = URL;
