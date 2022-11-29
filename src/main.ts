import { createApp } from 'vue'

import App from '@/App.vue'
// 引入路由
import router from '@/router'
// 引入全局状态管理
import pinia from '@/stores'

// 引入样式
import 'normalize.css/normalize.css'
// import 'element-plus/theme-chalk/dark/css-vars.css'
const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
