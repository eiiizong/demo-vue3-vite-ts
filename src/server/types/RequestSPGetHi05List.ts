interface AnyObject {
  [key: string]: any
}
// 定义接口请求类型
namespace RequestSPGetHi05List {
  // 请求参数
  export interface RequestOptions {
    chi051?: string
    chi037?: string
    chi031?: string
    pageNo?: number
    pageSize?: number
    isShowLoading?: boolean
    isShowErrorToast?: boolean
  }

  // 接口调用成功
  export interface RequestSuccessCallbackResult {
    /**
     * 开发者服务器返回的数据
     */
    data: string | AnyObject | ArrayBuffer
    /**
     * 开发者服务器返回的 HTTP 状态码
     */
    statusCode: number
    /**
     * 开发者服务器返回的 HTTP Response Header
     */
    header: any
    /**
     * 开发者服务器返回的 cookies，格式为字符串数组
     */
    cookies: string[]
  }
  // 接口调用失败
  export interface GeneralCallbackResult {
    /**
     * 错误信息
     */
    errMsg: string
  }
}

export type { RequestSPGetHi05List }
