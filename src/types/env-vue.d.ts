declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<NonNullable<unknown>, NonNullable<unknown>, never>;
  export default component;
}

interface ImportMetaEnv {
  readonly BASE_URL: string;
  readonly VITE_API_URL: string;
}

interface ImportMeta {
  glob: (pattern: string, options?: { eager?: boolean }) => Record<string, never>;
  readonly env: ImportMetaEnv;
}
