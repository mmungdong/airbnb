import axios from "axios"

import { BASE_URL, TIMEOUT } from "./config"

class MDRequest{
  constructor(baseURL, timeout){
    this.instance = axios.create({
      baseURL,
      timeout
    })

    // 请求拦截器
    // this.instance.interceptors.request.use(config => {
    //   return config
    // }, err => {
    //   return err
    // })
    
    // 响应拦截器
    this.instance.interceptors.response.use(res => {
      return res.data
    }, err => {
      return err
    })
  }

  request(config){
    return this.instance.request(config)
  }

  get(config) {
    return this.request({...config, method: 'GET'})
  }

  post(config) {
    return this.request({...config, method: 'POST'})
  }
}

export default new MDRequest(BASE_URL, TIMEOUT)