/**
 * 404 路由
 */
const routeNotFound = {
  path: '/:catchAll(.*)',
  component: () => import('@/views/not-found/not-found.vue'),
  meta: {
    title: '404',
    requireAuth: false
  }
}
export default routeNotFound
