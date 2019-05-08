import axios from 'axios'
import router from '@/router/index'
import qs from 'qs'
import store from '@/store'

let config = require('./http.conf').conf

axios.defaults = Object.assign(axios.defaults, config)

// ajax 全局相应拦截
axios.interceptors.response.use(response => {
  if (!response.data) return
  let status = Number(response.data.code)

  if (status !== 200) {
    if (status === 99999) { // 设置登录超时状态，重新登录
      router.replace({
        path: '/login'
      })
    } else if (status === 404) { // 接口返回 404，跳到 404 页面
      router.replace({
        path: '/404'
      })
    } else if (status >= 500) { // 接口返回大于 500，跳到 500 页面
      router.replace({
        path: '/500'
      })
    } else {
      store.commit('CREATE_WARN', {
        popupShow: true,
        warnTxt: response.data.message,
        to: ''
      })
    }
  }

  return response
}, error => {
  let errorText = ''
  if(error.config) {
    if(error.code === 'ECONNABORTED') {
      errorText = '请求超时...'
    } else {
      errorText = '请求出错...'
    }
  }

  // 其它意外请求时出错误弹窗
  store.commit('CREATE_WARN', {
    popupShow: true,
    warnTxt: errorText,
    to: '' // 自动跳到相应页面
  })

  store.commit('ROUTE_TO', '/index') // 点击确定按钮跳回 index 页面
  return Promise.reject(error)
})

export function get(url, params, conf = {}) {
  params = qs.stringify(params)
  conf = Object.assign(config, {method: 'get'}, conf)

  return new Promise((resolve, reject) => {
    axios.get(url, params, conf)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export function post(url, params, conf = {retry: 1}) {
  params = qs.stringify(params)

  return new Promise((resolve, reject) => {
    axios.post(url, params, conf)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
