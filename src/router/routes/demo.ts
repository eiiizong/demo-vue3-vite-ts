/**
 * /demo 示例
 */
const routeDemo = {
  path: '/demo',
  component: () => import('@/views/demo/index.vue'),
  meta: {
    title: '示例',
    requireAuth: false
  }
}
export default routeDemo
