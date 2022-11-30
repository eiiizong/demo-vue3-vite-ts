import { createI18n } from 'vue-i18n'
import config from '@/config'

import messages from './locales'

console.log('messages===', messages)

const i18n = createI18n({
  legacy: false,
  locale: config.systemLanguage || 'zh-cn',
  missingWarn: false,
  fallbackWarn: false,
  messages
})

export default i18n
