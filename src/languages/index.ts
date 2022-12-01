import { createI18n } from 'vue-i18n'

// @ts-ignore：process未找到错误 => 需要该文件在vscode工作区的根目录下，才不会有错误提示。
const { VITE_SYSTEM_LANGUAGE } = process.env

import messages from './locales'

const i18n = createI18n({
  legacy: false,
  locale: VITE_SYSTEM_LANGUAGE || 'zh-cn',
  missingWarn: false,
  fallbackWarn: false,
  messages
})
export default i18n
