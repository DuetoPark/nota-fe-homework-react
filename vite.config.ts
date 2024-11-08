import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // Alias
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, '/src'),
      },
    ],
  },
  css: {
    devSourcemap: true,
  },
});
