import { createI18n } from 'vue-i18n'
import messages from './locales'

console.log('messages===', messages)

const i18n = createI18n({
  locale: 'zhCn',
  messages
})

export default i18n
