import react from '@vitejs/plugin-react';

import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@api': '/src/api',
      '@assets': '/src/assets',
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@router': '/src/router',
      '@routes': '/src/routes',
      '@database': '/src/database',
      '@store': '/src/store',
      '@utils': '/src/utils',
      '@interfaces': '/src/interfaces',
      '@enums': '/src/enums',
      '@hooks': '/src/hooks',
      '@constants': '/src/constants',
      '@locales': '/src/locales',
    },
  },
  plugins: [react()],
  build: {
    outDir: 'build',
  },
});
