import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import env from './src/env';
import jsonImporter from 'node-sass-json-importer';
import svgr from 'vite-plugin-svgr'
// import jsonImporter from '@node-sass/json-importer';
// import reactRefresh from '@vitejs/plugin-react-refresh';

const { PORT } = env;
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    //,reactRefresh()
  ],
  css: {
    preprocessorOptions: {
      scss: {
        importer: [jsonImporter()],

      },
    },
  },
  server: {
    proxy: {
      '/api': {
        target: `http://localhost:${PORT}`,
        changeOrigin: true,
      },
      '/public': {
        target: `http://localhost:${PORT}`,
        changeOrigin: true,
      },
      '/auth': {
        target: `http://localhost:${PORT}`,
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'dist/app',
  },
});
