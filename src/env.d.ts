/* eslint-disable */

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    VUE_ROUTER_MODE: 'hash' | 'history' | 'abstract' | undefined;
    VUE_API_URL: string;
    VUE_BASE_IMG: string;
    VUE_BASE_IMPORT_URL: string;
    VUE_BASE_IMPORT: string;
    VUE_FALLBACK_IMG: string;
    VUE_SUPABASE_URL: string;
    VUE_SUPABASE_ANON_KEY: string;
    VUE_ROUTER_BASE: string | undefined;
  }
}
