/* eslint-disable */
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx'
/** @type {import('vite').UserConfig} */

export default ({ mode }: { mode: any }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        '@/': `${path.resolve(__dirname, 'src')}/`,
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    },
    build: {
      chunkSizeWarningLimit: 1024,
      assetsInlineLimit: 4096,
      cssCodeSplit: true,
      minify: 'terser',
      assetsDir: '',
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          },
          minifyInternalExports: true,
          assetFileNames: (assetInfo: any) => {
            const info = assetInfo.name.split('.');
            const extType = info[info.length - 1];
            if (/\.(png|jpe?g|gif|svg|webp|webm|mp3)$/.test(assetInfo.name)) {
              return `dist/assets/media/[name]-[hash].${extType}`;
            }
            if (/\.(css)$/.test(assetInfo.name)) {
              return `dist/assets/css/[name]-[hash].${extType}`;
            }
            if (/\.(woff|woff2|eot|ttf|otf)$/.test(assetInfo.name)) {
              return `dist/assets/fonts/[name]-[hash].${extType}`;
            }
            return `dist/[name]-[hash].${extType}`;
          },
          chunkFileNames: 'dist/assets/js/[name]-[hash].js',
          entryFileNames: 'dist/assets/js/[name]-[hash].js',
        },
      },
    },
    optimizeDeps: {
      force: false,
      entries: 'src/**/*',
    },

    css: {
      devSourcemap: true,
      modules: {
        scopeBehaviour: 'local',
      },
    },

    server: {
      port: Number(process.env.VITE_PORT),
      host: 'localhost',
      //use with wsl
      watch: {
        usePolling: true,
      },
      proxy: {
        '/api': {
          //domains local backend .env.development.local
          target: process.env.VITE_DOMAIN_LOCAL,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    json: {
      stringify: true,
    },
  });
};
