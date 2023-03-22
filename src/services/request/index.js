import axios from "axios";
import { BASE_URL, TIMEOUT } from "./constant"

class FyRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
    // 请求拦截器
    this.nterceptors = this.instance.interceptors.request.use(
      config => {
      return config
    })

    // 响应拦截器
    this.interceptors = this.instance.interceptors.response.use(
      res => {
        return res.data
      },
      err => {
        return err
      }
    )
  }

  request(config) {
    return this.instance.request(config)
  }

  get(config) {
    return this.request({...config, method: "GET"})
  }

  post(config) {
    return this.request({...config, method: "POST"})
  }

  delete(config) {
    return this.request({...config, method: "DELETE"})
  }

  put(config) {
    return this.request({...config, method: "PUT"})
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new FyRequest(BASE_URL, TIMEOUT)