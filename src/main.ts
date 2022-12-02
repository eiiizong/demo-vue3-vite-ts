import { createApp } from 'vue'

import App from '@/App.vue'
// 引入路由
import router from '@/router'
// 引入全局状态管理
import pinia from '@/stores'
// 引入国际化语言
import i18n from '@/languages'

// 引入样式
import 'normalize.css/normalize.css'
import '@/assets/styles/scss/index.scss'
// 引入样式 ElMessage
import 'element-plus/theme-chalk/src/message.scss'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(i18n)

app.mount('#app')
