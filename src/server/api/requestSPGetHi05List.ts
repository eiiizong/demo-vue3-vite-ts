import request from '@/server/request'
import type { RequestSPGetHi05List } from '@/server/types'

type SuccessResult = RequestSPGetHi05List.SPGetHi05ListSuccessResult
type ErrorResult = RequestSPGetHi05List.SPGetHi05ListErrorResult

/**
 * api 获取审批系统政策文件列表
 * @param {string} chi051 政策文件名 关键词
 * @param {string} chi037 业务局编码
 * @param {string} chi031 补贴项目编码
 * @param {number} pageNo 页数
 * @param {number} pageSize 每页条数
 * @param {boolean} isShowLoading 是否显示加载中动画 默认值 true
 * @param {boolean} isShowErrorToast 是否显示错误提示 默认值 true
 * @returns
 */
const requestSPGetHi05List = (
  chi051 = '',
  chi037 = '',
  chi031 = '',
  pageNo = 1,
  pageSize = 10
  // isShowLoading = true,
  // isShowErrorToast = true
): Promise<SuccessResult> => {
  const data = {
    methodNamedesc: '获取审批系统政策文件列表',
    methodName: 'getHi05List',
    pageNo: pageNo + '',
    pageSize: pageSize + '',
    aab301: '',
    chi051,
    chi037,
    chi031
  }

  return new Promise((resolve, reject) => {
    request('/frontRestService/frontBcpDataRestService/getWebServiceDataTwo', data)
      .then((res) => {
        resolve(res as SuccessResult)
      })
      .catch((err) => {
        reject(err as ErrorResult)
      })
  })
}
export { requestSPGetHi05List }
