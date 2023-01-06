import routeNotFound from './404'
import routeServerInternalError from './500'
import routeDemo from './demo'
import routeHome from './home'
import routeLogin from './login'

const routes = [routeNotFound, routeServerInternalError, routeDemo, ...routeHome, routeLogin]
export default routes
