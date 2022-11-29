import { createPinia } from 'pinia'
import { createLogger, reset } from './plugins'

const pinia = createPinia()

pinia.use(createLogger)
pinia.use(reset)

export default pinia
