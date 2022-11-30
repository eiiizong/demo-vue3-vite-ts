import router from '@/router'
/**
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
const routeToLogin = (): void => {
  router.replace({
    name: 'logo'
  })
}

export default routeToLogin
