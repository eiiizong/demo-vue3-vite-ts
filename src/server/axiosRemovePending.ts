import axios from 'axios'
import type { AxiosRequestConfig, Method } from 'axios'

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

export default axiosRemovePending
