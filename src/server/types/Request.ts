interface AnyObject {
  [key: string]: any
}

// 定义常用接口请求类型
namespace Request {
  // 结果错误数据类型
  export interface ResultError {
    errorCode: string
    msg: string
  }

  // 请求成功数据类型
  export interface SuccessResult<T> {
    code: number
    data: { resultData: T }
    errors: [ResultError]
    redirectUrl: string | undefined | null
    requestId: string | undefined | null
    serviceSuccess: boolean
  }
}

export type { AnyObject, Request }
