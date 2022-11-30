// index.ts
import axios from 'axios'
import type { AxiosRequestConfig, Method } from 'axios'
import { ElMessage } from 'element-plus'
import axiosErrorHandle from './axiosErrorHandle'

// 定义接口
interface PendingType {
  url?: string
  method?: Method
  params: any
  data: any
  cancel: any
}

// 取消重复请求
const pending: Array<PendingType> = []
const CancelToken = axios.CancelToken

// 移除重复请求
const axiosRemovePending = (config: AxiosRequestConfig) => {
  for (const key in pending) {
    const item: number = +key
    const list: PendingType = pending[key]
    // 当前请求在数组中存在时执行函数体
    if (
      list.url === config.url &&
      list.method === config.method &&
      JSON.stringify(list.params) === JSON.stringify(config.params) &&
      JSON.stringify(list.data) === JSON.stringify(config.data)
    ) {
      // 执行取消操作
      list.cancel('操作太频繁，请稍后再试')
      // 从数组中移除记录
      pending.splice(item, 1)
    }
  }
}

/**
 * 实例化请求配置
 */
const axiosInstance = axios.create({
  // 请求的base地址
  // @ts-ignore：process未找到错误 => 需要该文件在vscode工作区的根目录下，才不会有错误提示。
  baseURL: process.env.VUE_APP_API_URL,
  headers: {},
  // 请求超时时长
  timeout: 1000 * 60,
  // 表示跨域请求时是否需要使用凭证
  withCredentials: false
})

/**
 * 请求拦截器 每次请求前，如果存在token则在请求头中携带token
 */
axiosInstance.interceptors.request.use(
  (config) => {
    console.log('axiosInstance.interceptors.request.use', config)
    axiosRemovePending(config)

    config.cancelToken = new CancelToken((canceler) => {
      pending.push({
        url: config.url,
        method: config.method as Method,
        params: config.params,
        data: config.data,
        cancel: canceler
      })
    })
    // 登录流程控制中，根据本地是否存在token判断用户的登录情况
    // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token
    // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码
    // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。
    // const token = store.state.token;
    // localStorage.setItem('token', token);

    return config
  },
  (error) => {
    ElMessage.error(error.data.error.message)
    return Promise.reject(error.data.error.message)
  }
)

// 响应拦截器
axiosInstance.interceptors.response.use(
  function (config) {
    axiosRemovePending(config.config)
    // 请求成功
    if (config.status === 200 || config.status === 204) {
      return Promise.resolve(config)
    } else {
      return Promise.reject(config)
    }
  },
  function (error) {
    const { response } = error
    if (response) {
      axiosErrorHandle(response.status, response.data.message)

      // 超时重新请求
      const config = error.config

      // 全局的请求次数,请求的间隙
      const [RETRY_COUNT, RETRY_DELAY] = [3, 1000]

      if (config && RETRY_COUNT) {
        // 设置用于跟踪重试计数的变量
        config.__retryCount = config.__retryCount || 0
        // 检查是否已经把重试的总数用完
        if (config.__retryCount >= RETRY_COUNT) {
          return Promise.reject(response || { message: error.message })
        }
        // 增加重试计数
        config.__retryCount++
        // 创造新的Promise来处理指数后退
        const backoff = new Promise<void>((resolve) => {
          setTimeout(() => {
            resolve()
          }, RETRY_DELAY || 1)
        })

        // instance重试请求的Promise
        return backoff.then(() => {
          return axiosInstance(config)
        })
      }

      return Promise.reject(response)
    } else {
      // 处理断网的情况
      // eg:请求超时或断网时，更新state的network状态
      // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
      // 后续增加断网情况下做的一些操作
      // store.commit('networkState', false)
    }
  }
)

// 只需要考虑单一职责，这块只封装axios
export default axiosInstance
