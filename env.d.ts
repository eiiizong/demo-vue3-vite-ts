/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_REQUEST_URL: string
  readonly VITE_SYSTEM_LANGUAGE: string
  readonly VITE_SYSTEM_THEME: string
  readonly VITE_OPEN_DATA_ENCRYPTION: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
