import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import svgr from 'vite-plugin-svgr';

const ReactCompilerConfig = {
  /* ... */
};

export default defineConfig(({ mode }) => {
  const ENV = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const isDev = ENV.NODE_ENV === 'development';

  console.log(isDev);

  return {
    base: '/',
    plugins: [
      react({
        babel: {
          plugins: [['babel-plugin-react-compiler', ReactCompilerConfig]],
        },
      }),
      svgr(),
    ],
    build: {
      target: 'esnext',
    },
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
  };
});
