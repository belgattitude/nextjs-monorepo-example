import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import { compilerOptions } from './tsconfig.json';
import { resolve } from 'path';

// Workaround to enable tsconfig paths
const alias = Object.entries(compilerOptions.paths).reduce(
  (acc, [key, [value]]) => {
    const aliasKey = key.substring(0, key.length - 2);
    const path = value.substring(0, value.length - 2);
    return {
      ...acc,
      [aliasKey]: resolve(__dirname, path),
    };
  },
  {}
);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: { alias }, // add defined alias to Vite config
});
