/// <reference types="vite/client" />
/* eslint-disable */
export {};

declare global {
  interface ImportMetaEnv {
    readonly VITE_API_URL: string;
    readonly VITE_IMAGE_URL: string;
    readonly BASE_URL: string;
    readonly MODE: string;
    readonly DEV: boolean;
    readonly PROD: boolean;
    readonly SSR: boolean;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}
