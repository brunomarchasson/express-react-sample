import react from "@vitejs/plugin-react-swc";
import { defineConfig } from 'vite';
import env from './src/env';
// import reactRefresh from '@vitejs/plugin-react-refresh';

const {PORT} = env
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()
    //,reactRefresh()
    ],
  server: {
    proxy: {
      '/api': {
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
