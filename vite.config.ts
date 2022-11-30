import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

console.log('process.env.VUE_APP_API_URL====', loadEnv('development', './'))
console.log('process.env.VUE_APP_API_URL====', loadEnv('production', './'))

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  console.log(env, 987654)

  return {
    define: {
      __APP_ENV__: env.APP_ENV
    },
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css: {
      preprocessorOptions: {
        // 全局样式引入
        scss: {
          additionalData: '@import "@/assets/styles/scss/variables/index";',
          javascriptEnabled: true
        }
      },
      devSourcemap: true
    },
    server: {
      port: 3333,
      cors: true,
      proxy: {
        '/api': {
          target: process.env.VUE_APP_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  }
})
