import { createRouter, createWebHistory } from 'vue-router'

import { useStoreUserInfo } from '@/stores/modules'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// 路由拦截
router.beforeEach((to, from, next) => {
  const storeUserInfo = useStoreUserInfo()
  const { token } = storeUserInfo.getStoreUserInfo
  const { meta, fullPath } = to
  const { title, requireAuth } = meta

  if (title) {
    document.title = title as string
  }

  // 判断该路由是否需要登录权限 requireAuth 可以在路由元信息指定哪些页面需要登录权限
  if (requireAuth) {
    // 是否已登录
    if (!token) {
      // 没有用户id就重定向登陆
      next({
        path: '/login',
        query: { redirect: fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
      return
    } else {
      next()
    }
  } else {
    next()
  }
})
export default router
