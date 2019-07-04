let devUrl = '' // 代理转发 IP 地址
let baseName = ''

const conf = {
  baseURL: '/gbp/', // 代理转发根路径标识
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  },
  method: 'post',
  data: {},
  timeout: 10000, // 请求超时时间 10s
  withCredentials: true,
  responseType: 'json'
}
module.exports = {
  baseUrl: devUrl,
  baseName,
  conf: conf
}
