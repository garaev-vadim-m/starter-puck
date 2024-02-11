import { defineConfig } from 'cypress';
import { loadEnv } from 'vite';
process.env = { ...process.env, ...loadEnv('development', process.cwd()) };
export default defineConfig({
  e2e: {
    baseUrl: `http://localhost:${process.env.VITE_PORT}/`,
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite',
    },
  },
});
