import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

interface httpClientConfig extends Partial<AxiosRequestConfig> {
  baseURL?: string,
  defaultHeaders?: any
}

export default class HTTPClient {
  private instance: AxiosInstance
  private config: httpClientConfig

  constructor(config: httpClientConfig) {
    this.config = config
    const { defaultHeaders } = this.config

    this.instance = axios.create({
      baseURL: "https://api.sigfox.com/v2/",
      headers: Object.assign({}, defaultHeaders)
    })
  }

  public async get<T>(url: string, params = {}): Promise<T> {
    const res = await this.instance.get(url, { params })
    return res.data
  }

  public async post<T>(url: string, params?: any): Promise<T> {
    const res = await this.instance.post(url, params)
    return res.data
  }

  public async put<T>(url: string, params?: any): Promise<T> {
    const res = await this.instance.put(url, params)
    return res.data
  }

  public async delete<T>(url: string): Promise<T> {
    const res = await this.instance.delete(url)
    return res.data
  }
}
