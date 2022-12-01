import type { Method } from 'axios'
import type { Request } from './types'
import axios from './axios'

/**
 * 请求
 * @param url
 * @param params
 * @param method
 * @returns
 */
const request = (url = '', params = {}, method: Method = 'POST') => {
  // 添加默认参数
  params = {
    ...params,
    chb004: '02' // 调用渠道
  }

  return new Promise((resolve, reject) => {
    let promise
    method = method.toUpperCase() as Method

    switch (method) {
      case 'GET':
        promise = axios.get(url, {
          params
        })
        break
      case 'POST':
        promise = axios.post(url, params)
        break
      default:
        promise = axios.post(url, params)
        break
    }

    // 处理返回
    promise
      .then((res) => {
        const resData: Request.SuccessResult<any> = res.data
        if (resData.code === 200) {
          resolve(resData.data.resultData)
        } else {
          reject(resData)
        }
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export default request
