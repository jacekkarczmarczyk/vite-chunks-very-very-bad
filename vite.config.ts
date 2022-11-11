import { defineConfig, splitVendorChunkPlugin } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import ImportmapPlugin from 'importmap-plugin';

export default defineConfig({
  define: {
    'import.meta.env.BUILD_TIME': JSON.stringify(new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()),
  },
  build: {
    rollupOptions: {
      output: {
        format: 'system',
        entryFileNames: 'app/index.js',
        chunkFileNames: 'chunks/[name].js',
        plugins: [
          ImportmapPlugin({
            base: '/',
            external: false,
            indexHtml: 'index.html',
          }),
        ],
        manualChunks: id => {
          if (id.includes('src/env.ts')) return 'env';
        },
      },
    },
  },
  plugins: [
    createVuePlugin(),
    splitVendorChunkPlugin(),
  ],
});
