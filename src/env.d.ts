/// <reference types="astro/client" />

// ---- Cloudflare Worker Environment Bindings ------------------------------
// Add your KV, D1, R2, etc. bindings below when needed.
// They will be picked up by `import("@astrojs/cloudflare").Runtime<Env>`.

interface Env {
  // Example: MY_KV: KVNamespace;
  // DATABASE: D1Database;
  [key: string]: unknown;
}

type CFRuntime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
  // Available as Astro.locals on the server
  interface Locals extends CFRuntime {}
}

// ---- Environment Variables ----------------------------------------------

interface ImportMetaEnv {
  /** Bearer token for `/admin` dashboard POST requests. */
  readonly PUBLIC_ADMIN_SECRET?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Temporary stub: provides type until `@astrojs/cloudflare` package types are installed.
declare module "@astrojs/cloudflare" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export type Runtime<T = any> = any;
}
