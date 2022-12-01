import axios from './axios'
import qs from 'qs'

export class Request {
  /**
   * get方法
   * @param {string} url 路径
   * @param {object} params 参数
   */
  static get = (url: string, params?: any) => {
    return new Promise((resolve, reject) => {
      axios
        .get(url, { params })
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  /**
   * post方法
   * @param {string} url 路径
   * @param {object} params 参数
   */
  static post = (url: string, params?: any, isShowLoading = true, isShowErrorToast = true) => {
    params = {
      ...params,
      chm301: '07',
      chw017: '05',
      chb004: '03'
    }
    return new Promise((resolve, reject) => {
      axios
        .post(url, params)
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}
