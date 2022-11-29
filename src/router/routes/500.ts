/**
 * 500 路由
 */
const routeServerInternalError = {
  path: '/500',
  component: () => import('@/views/server-internal-error/index.vue'),
  meta: {
    title: '服务器内部错误',
    requireAuth: false
  }
}
export default routeServerInternalError
