/**
 * 404 路由
 */
const routeNotFound = {
  path: '/:catchAll(.*)',
  component: () => import('@/views/not-found/index.vue'),
  meta: {
    title: '404',
    requireAuth: false
  }
}
export default routeNotFound
