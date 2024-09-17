// vite.config.mjs
import react from "file:///C:/Users/bruno/Documents/Dev/Nouveau%20dossier/vite-boilerplate-main/node_modules/.pnpm/@vitejs+plugin-react-swc@3.7.0_@swc+helpers@0.5.5_vite@5.4.2_@types+node@22.5.1_sass-embedded_a4o4z77k42utzcdx35bwwrxcke/node_modules/@vitejs/plugin-react-swc/index.mjs";
import { defineConfig } from "file:///C:/Users/bruno/Documents/Dev/Nouveau%20dossier/vite-boilerplate-main/node_modules/.pnpm/vite@5.4.2_@types+node@22.5.1_sass-embedded@1.77.8_sass@1.78.0_terser@5.31.6/node_modules/vite/dist/node/index.js";

// src/env.ts
import { cleanEnv, num, str, url } from "file:///C:/Users/bruno/Documents/Dev/Nouveau%20dossier/vite-boilerplate-main/node_modules/.pnpm/envalid@8.0.0/node_modules/envalid/dist/index.js";
import { config } from "file:///C:/Users/bruno/Documents/Dev/Nouveau%20dossier/vite-boilerplate-main/node_modules/.pnpm/dotenv@16.4.5/node_modules/dotenv/lib/main.js";
config();
var env_default = cleanEnv(process.env, {
  APP_NAME: str(),
  APP_URL: url(),
  PORT: num({ default: 9e3 }),
  APP_ENV: str({ choices: ["prod", "test", "dev"] }),
  MAX_CLUSTERS: num({ default: Infinity }),
  SMTP_SERVER: str(),
  SMTP_PORT: num(),
  SMTP_USER: str(),
  SMTP_PWD: str(),
  DB_CLIENT: str(),
  DB_HOST: str(),
  DB_PORT: num({ default: 5432 }),
  DB_USERNAME: str(),
  DB_PASSWORD: str(),
  DB_DATABASE: str(),
  JWT_SECRET: str(),
  SESSION_EXPIRES: str({ default: "10d" })
});

// vite.config.mjs
import jsonImporter from "file:///C:/Users/bruno/Documents/Dev/Nouveau%20dossier/vite-boilerplate-main/node_modules/.pnpm/node-sass-json-importer@4.3.0_node-sass@9.0.0/node_modules/node-sass-json-importer/dist/index.js";
var { PORT } = env_default;
var vite_config_default = defineConfig({
  plugins: [
    react()
    //,reactRefresh()
  ],
  css: {
    preprocessorOptions: {
      scss: {
        importer: [jsonImporter()]
      }
    }
  },
  server: {
    proxy: {
      "/api": {
        target: `http://localhost:${PORT}`,
        changeOrigin: true
      },
      "/public": {
        target: `http://localhost:${PORT}`,
        changeOrigin: true
      },
      "/auth": {
        target: `http://localhost:${PORT}`,
        changeOrigin: true
      }
    }
  },
  build: {
    outDir: "dist/app"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubWpzIiwgInNyYy9lbnYudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxicnVub1xcXFxEb2N1bWVudHNcXFxcRGV2XFxcXE5vdXZlYXUgZG9zc2llclxcXFx2aXRlLWJvaWxlcnBsYXRlLW1haW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGJydW5vXFxcXERvY3VtZW50c1xcXFxEZXZcXFxcTm91dmVhdSBkb3NzaWVyXFxcXHZpdGUtYm9pbGVycGxhdGUtbWFpblxcXFx2aXRlLmNvbmZpZy5tanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2JydW5vL0RvY3VtZW50cy9EZXYvTm91dmVhdSUyMGRvc3NpZXIvdml0ZS1ib2lsZXJwbGF0ZS1tYWluL3ZpdGUuY29uZmlnLm1qc1wiO2ltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2MnO1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IGVudiBmcm9tICcuL3NyYy9lbnYnO1xyXG5pbXBvcnQganNvbkltcG9ydGVyIGZyb20gJ25vZGUtc2Fzcy1qc29uLWltcG9ydGVyJztcclxuLy8gaW1wb3J0IGpzb25JbXBvcnRlciBmcm9tICdAbm9kZS1zYXNzL2pzb24taW1wb3J0ZXInO1xyXG4vLyBpbXBvcnQgcmVhY3RSZWZyZXNoIGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0LXJlZnJlc2gnO1xyXG5cclxuY29uc3QgeyBQT1JUIH0gPSBlbnY7XHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgcmVhY3QoKSxcclxuICAgIC8vLHJlYWN0UmVmcmVzaCgpXHJcbiAgXSxcclxuICBjc3M6IHtcclxuICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcclxuICAgICAgc2Nzczoge1xyXG4gICAgICAgIGltcG9ydGVyOiBbanNvbkltcG9ydGVyKCldLFxyXG5cclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIHByb3h5OiB7XHJcbiAgICAgICcvYXBpJzoge1xyXG4gICAgICAgIHRhcmdldDogYGh0dHA6Ly9sb2NhbGhvc3Q6JHtQT1JUfWAsXHJcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICAnL3B1YmxpYyc6IHtcclxuICAgICAgICB0YXJnZXQ6IGBodHRwOi8vbG9jYWxob3N0OiR7UE9SVH1gLFxyXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgJy9hdXRoJzoge1xyXG4gICAgICAgIHRhcmdldDogYGh0dHA6Ly9sb2NhbGhvc3Q6JHtQT1JUfWAsXHJcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBvdXREaXI6ICdkaXN0L2FwcCcsXHJcbiAgfSxcclxufSk7XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcYnJ1bm9cXFxcRG9jdW1lbnRzXFxcXERldlxcXFxOb3V2ZWF1IGRvc3NpZXJcXFxcdml0ZS1ib2lsZXJwbGF0ZS1tYWluXFxcXHNyY1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcYnJ1bm9cXFxcRG9jdW1lbnRzXFxcXERldlxcXFxOb3V2ZWF1IGRvc3NpZXJcXFxcdml0ZS1ib2lsZXJwbGF0ZS1tYWluXFxcXHNyY1xcXFxlbnYudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2JydW5vL0RvY3VtZW50cy9EZXYvTm91dmVhdSUyMGRvc3NpZXIvdml0ZS1ib2lsZXJwbGF0ZS1tYWluL3NyYy9lbnYudHNcIjtpbXBvcnQgeyBjbGVhbkVudiwgbnVtLCBzdHIsIHVybCB9IGZyb20gJ2VudmFsaWQnO1xuLyoqXG4gKiBFbnN1cmVzIHRoYXQgYWxsIG9mIHRoZSBlbnZpcm9ubWVudCBkZXBlbmRlbmNpZXMgYXJlIG1ldC5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hZi9lbnZhbGlkXG4gKi9cbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ2RvdGVudic7XG4vLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL21vdGRvdGxhL2RvdGVudiNob3ctZG8taS11c2UtZG90ZW52LXdpdGgtaW1wb3J0XG5jb25maWcoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xlYW5FbnYocHJvY2Vzcy5lbnYsIHtcbiAgQVBQX05BTUU6IHN0cigpLFxuICBBUFBfVVJMOiB1cmwoKSxcbiAgUE9SVDogbnVtKHsgZGVmYXVsdDogOTAwMCB9KSxcbiAgQVBQX0VOVjogc3RyKHsgY2hvaWNlczogWydwcm9kJywgJ3Rlc3QnLCAnZGV2J10gfSksXG5cbiAgTUFYX0NMVVNURVJTOiBudW0oeyBkZWZhdWx0OiBJbmZpbml0eSB9KSxcblxuICBTTVRQX1NFUlZFUjogc3RyKCksXG4gIFNNVFBfUE9SVDogbnVtKCksXG4gIFNNVFBfVVNFUjogc3RyKCksXG4gIFNNVFBfUFdEOiBzdHIoKSxcblxuICBEQl9DTElFTlQ6IHN0cigpLFxuICBEQl9IT1NUOiBzdHIoKSxcbiAgREJfUE9SVDogbnVtKHsgZGVmYXVsdDogNTQzMiB9KSxcbiAgREJfVVNFUk5BTUU6IHN0cigpLFxuICBEQl9QQVNTV09SRDogc3RyKCksXG4gIERCX0RBVEFCQVNFOiBzdHIoKSxcblxuICBKV1RfU0VDUkVUOiBzdHIoKSxcbiAgU0VTU0lPTl9FWFBJUkVTOiBzdHIoeyBkZWZhdWx0OiAnMTBkJyB9KSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwWSxPQUFPLFdBQVc7QUFDNVosU0FBUyxvQkFBb0I7OztBQ0R5VyxTQUFTLFVBQVUsS0FBSyxLQUFLLFdBQVc7QUFNOWEsU0FBUyxjQUFjO0FBRXZCLE9BQU87QUFFUCxJQUFPLGNBQVEsU0FBUyxRQUFRLEtBQUs7QUFBQSxFQUNuQyxVQUFVLElBQUk7QUFBQSxFQUNkLFNBQVMsSUFBSTtBQUFBLEVBQ2IsTUFBTSxJQUFJLEVBQUUsU0FBUyxJQUFLLENBQUM7QUFBQSxFQUMzQixTQUFTLElBQUksRUFBRSxTQUFTLENBQUMsUUFBUSxRQUFRLEtBQUssRUFBRSxDQUFDO0FBQUEsRUFFakQsY0FBYyxJQUFJLEVBQUUsU0FBUyxTQUFTLENBQUM7QUFBQSxFQUV2QyxhQUFhLElBQUk7QUFBQSxFQUNqQixXQUFXLElBQUk7QUFBQSxFQUNmLFdBQVcsSUFBSTtBQUFBLEVBQ2YsVUFBVSxJQUFJO0FBQUEsRUFFZCxXQUFXLElBQUk7QUFBQSxFQUNmLFNBQVMsSUFBSTtBQUFBLEVBQ2IsU0FBUyxJQUFJLEVBQUUsU0FBUyxLQUFLLENBQUM7QUFBQSxFQUM5QixhQUFhLElBQUk7QUFBQSxFQUNqQixhQUFhLElBQUk7QUFBQSxFQUNqQixhQUFhLElBQUk7QUFBQSxFQUVqQixZQUFZLElBQUk7QUFBQSxFQUNoQixpQkFBaUIsSUFBSSxFQUFFLFNBQVMsTUFBTSxDQUFDO0FBQ3pDLENBQUM7OztBRDdCRCxPQUFPLGtCQUFrQjtBQUl6QixJQUFNLEVBQUUsS0FBSyxJQUFJO0FBRWpCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQTtBQUFBLEVBRVI7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILHFCQUFxQjtBQUFBLE1BQ25CLE1BQU07QUFBQSxRQUNKLFVBQVUsQ0FBQyxhQUFhLENBQUM7QUFBQSxNQUUzQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxRQUFRO0FBQUEsUUFDTixRQUFRLG9CQUFvQixJQUFJO0FBQUEsUUFDaEMsY0FBYztBQUFBLE1BQ2hCO0FBQUEsTUFDQSxXQUFXO0FBQUEsUUFDVCxRQUFRLG9CQUFvQixJQUFJO0FBQUEsUUFDaEMsY0FBYztBQUFBLE1BQ2hCO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUCxRQUFRLG9CQUFvQixJQUFJO0FBQUEsUUFDaEMsY0FBYztBQUFBLE1BQ2hCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxFQUNWO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
