/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_REQUEST_URL: string
  readonly VITE_SYSTEM_LANGUAGE: 'zh-cn' | 'en'
  readonly VITE_SYSTEM_THEME: 'default'
  readonly VITE_OPEN_DATA_ENCRYPTION: boolean
  readonly VITE_ELEMENTPLUS_NAMESPACE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
