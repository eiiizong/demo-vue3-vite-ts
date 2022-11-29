import routeNotFound from './404'
import routeServerInternalError from './500'
import routeDemo from './demo'
import routeHome from './home'

const routes = [routeNotFound, routeServerInternalError, routeDemo, ...routeHome]
export default routes
