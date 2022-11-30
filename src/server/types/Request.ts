interface AnyObject {
  [key: string]: any
}

// 定义常用接口请求类型
namespace Request {
  // 请求参数
  export interface RequestOptions {
    /**
     * 资源url
     */
    url: string
    /**
     * 请求的参数
     */
    data?: string | AnyObject | ArrayBuffer
    /**
     * 设置请求的 header，header 中不能设置 Referer。
     */
    header?: any
    /**
     * 默认为 GET
     * 可以是：OPTIONS，GET，HEAD，POST，PUT，DELETE，TRACE，CONNECT
     */
    method?: 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT'
    /**
     * 超时时间
     */
    timeout?: number
    /**
     * 如果设为json，会尝试对返回的数据做一次 JSON.parse
     */
    dataType?: string
    /**
     * 设置响应的数据类型。合法值：text、arraybuffer
     */
    responseType?: string
    /**
     * 验证 ssl 证书
     */
    sslVerify?: boolean
    /**
     * 跨域请求时是否携带凭证
     */
    withCredentials?: boolean
    /**
     * DNS解析时优先使用 ipv4
     */
    firstIpv4?: boolean
    /**
     * 成功返回的回调函数
     */
    success?: (result: RequestSuccessCallbackResult) => void
    /**
     * 失败的回调函数
     */
    fail?: (result: GeneralCallbackResult) => void
    /**
     * 结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (result: GeneralCallbackResult) => void
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

export type { AnyObject, Request }
