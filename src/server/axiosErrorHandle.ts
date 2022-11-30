import { ElMessage } from 'element-plus'
import axiosRouteToLogin from './axiosRouteToLogin'

/**
 * 请求失败后的错误统一处理
 * @param {number} status 请求失败的状态码
 */
const axiosErrorHandle = (status: number, resMsg = ''): void => {
  // 状态码判断
  switch (status) {
    case 302:
      ElMessage.error('接口重定向了！')
      break
    case 400:
      ElMessage.error('发出的请求有错误，服务器没有进行新建或修改数据的操作==>' + status)
      break
    // 401: 未登录
    // 未登录则跳转登录页面，并携带当前页面的路径
    // 在登录成功后返回当前页面，这一步需要在登录页操作。
    case 401:
      ElMessage.error('token:登录失效==>' + status)
      break
    // 403 token过期
    // 清除token并跳转登录页
    case 403:
      ElMessage.error('登录过期,用户得到授权，但是访问是被禁止的==>' + status)
      axiosRouteToLogin()
      break
    case 404:
      ElMessage.error('网络请求不存在==>' + status)
      break
    case 406:
      ElMessage.error('请求的格式不可得==>' + status)
      break
    case 408:
      ElMessage.error('请求超时！')
      break
    case 410:
      ElMessage.error('请求的资源被永久删除，且不会再得到的==>' + status)
      break
    case 422:
      ElMessage.error('当创建一个对象时，发生一个验证错误==>' + status)
      break
    case 500:
      ElMessage.error('服务器发生错误，请检查服务器==>' + status)
      break
    case 502:
      ElMessage.error('网关错误==>' + status)
      break
    case 503:
      ElMessage.error('服务不可用，服务器暂时过载或维护==>' + status)
      break
    case 504:
      ElMessage.error('网关超时==>' + status)
      break
    default:
      ElMessage.error('其他错误错误==>' + status)
  }
}

export default axiosErrorHandle
