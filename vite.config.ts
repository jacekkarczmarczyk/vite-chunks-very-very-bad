import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';

export default defineConfig({
  define: {
    'import.meta.env.BUILD_TIME': JSON.stringify(new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()),
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: id => {
          if (id.includes('src/env.ts')) return 'env';
        },
      },
    },
  },
  plugins: [
    createVuePlugin(),
  ],
});
