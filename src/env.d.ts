/// <reference types="astro/client" />

// Cloudflare Worker environment bindings
// Add KV, D1, R2, etc., here as you need.
interface Env {
  // Example: MY_KV: KVNamespace;
  // DATABASE: D1Database;
  [key: string]: unknown;
}

type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {}
}

interface ImportMetaEnv {
  readonly PUBLIC_ADMIN_SECRET?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Stub for astro/client when types are not yet generated (e.g. before running `npm install`).
// Once node_modules are installed, the real types from `astro` will overwrite this stub.
declare module "astro/client" {
  // Re-export anything as `any` to silence editor errors during initial setup.
  // eslint-disable-next-line @typescript-eslint/ban-types
  const whatever: {};
  export default whatever;
}

// Stub for @astrojs/cloudflare types for first-time install environments.
declare module "@astrojs/cloudflare" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export type Runtime<T = any> = any;
}

// Stub for core 'astro' types used in endpoints.
declare module "astro" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export type APIRoute = any;
}
