import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    define: {
      'process.env': env
    },
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver({ importStyle: 'sass' })]
      }),
      Components({
        // allow auto load markdown components under `./src/components/`
        extensions: ['vue', 'md'],
        // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        resolvers: [
          ElementPlusResolver({
            importStyle: 'sass'
          })
        ],
        dts: './components.d.ts'
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '~': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css: {
      preprocessorOptions: {
        // 全局样式引入
        scss: {
          // additionalData: '@import "@/assets/styles/scss/variables/index";',
          additionalData: '@use "~/assets/styles/scss/element/index.scss" as *;'
        }
      },
      devSourcemap: true
    },
    server: {
      port: 3333,
      cors: true,
      proxy: {
        '/api': {
          target: env.VITE_API_REQUEST_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  }
})
