/**
 * 登录 路由
 */
const routeLogin = {
  path: '/login',
  component: () => import('@/views/login/index.vue'),
  meta: {
    title: '登录',
    requireAuth: false
  }
}
export default routeLogin
