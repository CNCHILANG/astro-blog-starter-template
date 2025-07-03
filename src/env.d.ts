/// <reference types="astro/client" />

// Cloudflare Worker bindings (add your own as needed)
interface Env {
  // Example: DATABASE: D1Database;
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

// Minimal stub until `@astrojs/cloudflare` types are installed.
declare module "@astrojs/cloudflare" {
  export type Runtime<T = unknown> = Record<string, unknown>;
}
