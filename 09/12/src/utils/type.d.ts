export interface $Request {
  (): any
}

export interface $RequestConfig {
  retry?: (res: any) => number | number
}