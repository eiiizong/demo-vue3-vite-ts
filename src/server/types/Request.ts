interface AnyObject {
  [key: string]: any
}

// 定义常用接口请求类型
namespace Request {
  // 结果正常数据类型
  export interface ResultData {}

  // 结果错误数据类型
  export interface ResultError {
    errorCode: string
    msg: string
    parameter: null
  }

  // 请求成功数据类型
  export interface SuccessResult {
    code: number
    data: ResultData
    errors: [ResultError]
    redirectUrl: string | undefined | null
    requestId: string | undefined | null
    serviceSuccess: boolean
  }

  // 接口调用失败
  export interface GeneralCallbackResult {
    /**
     * 错误信息
     */
    errMsg: string
  }
}

export type { AnyObject, Request }
