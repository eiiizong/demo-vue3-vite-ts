/**
 * /home 首页 路由
 */
const routeHome = [
  // 路由重定向
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: '首页',
      requireAuth: true
    },
    children: []
  }
]

export default routeHome
