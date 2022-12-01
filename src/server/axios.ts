// index.ts
import axios from 'axios'
import type { Method, AxiosRequestConfig } from 'axios'
import { ElMessage } from 'element-plus'
import axiosErrorHandle from './axiosErrorHandle'

// @ts-ignore：process未找到错误 => 需要该文件在vscode工作区的根目录下，才不会有错误提示。
const { VITE_API_REQUEST_URL } = process.env

// 定义接口
interface PendingType {
  url?: string
  method?: Method | string
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
    console.log('axiosRemovePending', key)
    const index: number = +key
    const item: PendingType = pending[key]

    const { url, method, params, data } = config
    const { url: url_item, method: method_item, params: params_item, data: data_item } = item
    // 当前请求在数组中存在时执行函数体
    if (
      url === url_item &&
      method === method_item &&
      JSON.stringify(params) === JSON.stringify(params_item) &&
      JSON.stringify(data) === JSON.stringify(data_item)
    ) {
      // 执行取消操作
      item.cancel('操作太频繁，请稍后再试')
      // 从数组中移除记录
      pending.splice(index, 1)
    }
  }
}

/**
 * 实例化请求配置
 */
const instance = axios.create({
  // 请求的base地址
  baseURL: VITE_API_REQUEST_URL,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin-Type': '*'
  },
  // 将与请求一起发送的 URL 参数 必须是一个无格式对象(plain object)或 URLSearchParams 对象

  params: {
    chm301: '07',
    chw017: '05',
    chb004: '03'
  },

  // 请求超时时长
  timeout: 1000 * 60,
  // 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: 'json',
  // 表示跨域请求时是否需要使用凭证
  withCredentials: false
})

/**
 * 请求拦截器 每次请求前，如果存在token则在请求头中携带token
 */
instance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    console.log('instance.interceptors.request.use config', config)
    const { url, method, params, data } = config
    axiosRemovePending(config)
    config.cancelToken = new CancelToken((canceler) => {
      pending.push({
        url,
        method: method,
        params,
        data,
        cancel: canceler
      })
    })
    // 登录流程控制中，根据本地是否存在token判断用户的登录情况
    // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token
    // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码
    // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。

    return config
  },
  (error) => {
    // 对请求错误做些什么
    console.log('instance.interceptors.request.use error', error)
    const { data } = error
    ElMessage.error(data.error.message)
    return Promise.reject(data.error.message)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    console.log('instance.interceptors.response.use response', response)
    const { config, status, data } = response
    axiosRemovePending(config)
    // 请求成功
    if (status === 200) {
      return Promise.resolve(data)
    } else {
      return Promise.reject(response)
    }
  },
  (error) => {
    // 对响应错误做点什么
    const { response, config, message } = error
    if (response) {
      const { status, data } = response
      axiosErrorHandle(status, data.message)

      // 超时重新请求
      // 设置全局的请求次数,请求的间隙
      const [RETRY_COUNT, RETRY_DELAY] = [3, 1000]

      if (config && RETRY_COUNT) {
        // 设置用于跟踪重试计数的变量
        config.__retryCount = config.__retryCount || 0
        // 检查是否已经把重试的总数用完
        if (config.__retryCount >= RETRY_COUNT) {
          return Promise.reject(response || { message })
        }
        // 增加重试计数
        config.__retryCount++
        // 创造新的Promise来处理指数后退
        const backoff = new Promise<void>((resolve) => {
          setTimeout(() => {
            resolve()
          }, RETRY_DELAY)
        })

        // instance重试请求的Promise
        return backoff.then(() => {
          return instance(config)
        })
      }

      return Promise.reject(response)
    } else {
      // 处理断网的情况
      // eg:请求超时或断网时，更新state的network状态
      // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
      // 后续增加断网情况下做的一些操作
    }
  }
)

// 只需要考虑单一职责，这块只封装axios
export default instance
