import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
import { HTTPError, ReadError, RequestError } from "./exceptions";

interface httpClientConfig extends Partial<AxiosRequestConfig> {
  baseURL?: string;
  defaultHeaders?: any;
}

export default class HTTPClient {
  private instance: AxiosInstance;
  private config: httpClientConfig;

  constructor(config: httpClientConfig) {
    this.config = config;
    const { defaultHeaders } = this.config;

    this.instance = axios.create({
      baseURL: "https://api.sigfox.com/v2/",
      headers: Object.assign({}, defaultHeaders),
    });

    this.instance.interceptors.response.use(
      res => res,
      err => Promise.reject(this.wrapError(err)),
    );
  }

  public async get<T>(url: string, params = {}): Promise<T> {
    const res = await this.instance.get(url, { params });
    return res.data;
  }

  public async post<T>(url: string, params?: any): Promise<T> {
    const res = await this.instance.post(url, params);
    return res.data;
  }

  public async put<T>(url: string, params?: any): Promise<T> {
    const res = await this.instance.put(url, params);
    return res.data;
  }

  public async delete<T>(url: string): Promise<T> {
    const res = await this.instance.delete(url);
    return res.data;
  }

  private wrapError(err: AxiosError): Error {
    if (err.response) {
      return new HTTPError(
        err.message,
        err.response.status,
        err.response.statusText,
        err,
      );
    } else if (err.code) {
      return new RequestError(err.message, err.code, err);
    } else if (err.config) {
      return new ReadError(err);
    }

    return err;
  }
}
