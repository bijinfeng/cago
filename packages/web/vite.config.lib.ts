import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// const ReactCompilerConfig = {
//   /* ... */
// };

export default defineConfig({
  plugins: [
    react({
      babel: {
        // plugins: [['babel-plugin-react-compiler', ReactCompilerConfig]],
      },
    }),
    svgr(),
  ],
  build: {
    outDir: 'lib',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'MyLib',
      formats: ['es'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-router-dom', '@pingtou/ui'],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve('src'),
    },
  },
});
