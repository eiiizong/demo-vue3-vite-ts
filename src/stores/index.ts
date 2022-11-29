import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createLogger, reset } from './plugins'

const pinia = createPinia()

pinia.use(createLogger)
pinia.use(reset)
pinia.use(piniaPluginPersistedstate)

export default pinia
