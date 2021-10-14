import {
  createMultipleDevicesParams,
  DeviceMessage,
  Pagination,
  updateMultipleDevicesParams,
} from ".";
import HTTPClient from "./http";
import {
  createDeviceParams,
  Device,
  deviceList,
  devicesQueryParams,
  DeviceType,
  deviceTypeList,
  transferMultipleDevicesParams,
  updateDeviceParams,
  updateDeviceTypeParams,
} from "./types";
import { btoa } from "./utils";

export type ClientConfig = {
  username: string;
  password: string;
};

export default class Client {
  public config: ClientConfig;
  private http: HTTPClient;

  constructor(config: ClientConfig) {
    if (!config.username || !config.password) {
      throw new Error("username or password doesn't exist");
    }
    this.config = config;
    this.http = new HTTPClient({
      defaultHeaders: this.authHeader(),
    });
  }

  public devices(params: devicesQueryParams = {}): Promise<deviceList> {
    return this.http.get("/devices", params);
  }

  public createDevice(params: createDeviceParams): Promise<any> {
    return this.http.post("/devices", params);
  }

  public getDevice(deviceId: string): Promise<Device> {
    return this.http.get(`/devices/${deviceId}`);
  }

  public updateDevice(deviceId: string, params: updateDeviceParams) {
    return this.http.put(`/devices/${deviceId}`, params);
  }

  public deleteDevice(deviceId: string): Promise<any> {
    return this.http.delete(`/devices/${deviceId}`);
  }

  public getUndeliveredCallbacks(deviceId: string): Promise<any> {
    return this.http.get(`/devices/${deviceId}/callbacks-not-delivered`);
  }

  public disengageSequenceNumber(deviceId: string): Promise<any> {
    return this.http.post(`/devices/${deviceId}/disengage`);
  }

  public getMessages(
    deviceId: string
  ): Promise<{ data?: DeviceMessage[]; paging?: Pagination }> {
    return this.http.get(`/devices/${deviceId}/messages`);
  }

  public getNumberOfMessages(deviceId: string): Promise<any> {
    return this.http.get(`/devices/${deviceId}/messages/metric`);
  }

  public getDeviceLocations(deviceId: string): Promise<any> {
    return this.http.get(`/devices/${deviceId}/locations`);
  }

  public createMultipleDevices(
    params: createMultipleDevicesParams
  ): Promise<any> {
    return this.http.post("/devices/bulk", params);
  }

  public updateMultipleDevices(
    params: updateMultipleDevicesParams
  ): Promise<any> {
    return this.http.put("/devices/bluk", params);
  }

  public deviceTypes(): Promise<deviceTypeList> {
    return this.http.get("/device-types");
  }

  public transferMultipleDevices(
    params: transferMultipleDevicesParams
  ): Promise<any> {
    return this.http.post("/devices/bulk/transfer", params);
  }

  public getDeviceType(deviceTypeId: string): Promise<DeviceType> {
    return this.http.get(`/device-types/${deviceTypeId}`);
  }

  public updateDeviceType(
    deviceTypeId: string,
    params: updateDeviceTypeParams
  ): Promise<any> {
    return this.http.put(`/device-types/${deviceTypeId}`, params);
  }

  public getMessagesByDeviceType(deviceTypeId: string): Promise<any> {
    return this.http.get(`/device-types/${deviceTypeId}/messages`);
  }

  public getCallbacksNotDelivered(
    deviceTypeId: string,
    callbackId: string
  ): Promise<any> {
    return this.http.get(
      `/device-types/${deviceTypeId}/callbacks/${callbackId}/callbacks-not-delivered`
    );
  }

  private authHeader() {
    const { username, password } = this.config;
    const basicAuth = "Basic " + btoa(username + ":" + password);

    return { Authorization: basicAuth };
  }
}
