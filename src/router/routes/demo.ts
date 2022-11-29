/**
 * /demo 示例
 */
const routeDemo = {
  path: '/demo',
  component: () => import('@/views/demo/index.vue'),
  meta: {
    title: '示例',
    requireAuth: false
  },
  children: [
    {
      path: 'use-element-plus',
      component: () => import('@/views/demo/children/use-element-plus.vue'),
      meta: {
        title: '示例 use-element-plus',
        requireAuth: false
      }
    },
    {
      path: 'use-pinia',
      component: () => import('@/views/demo/children/use-pinia.vue'),
      meta: {
        title: '示例 use-pinia',
        requireAuth: false
      }
    }
  ]
}
export default routeDemo
