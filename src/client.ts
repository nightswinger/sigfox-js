import HTTPClient from "./http";
import {
  CreateDeviceOutput,
  CreateDeviceParams,
  CreateDeviceTypeOutput,
  CreateDeviceTypeParams,
  CreateGroupOutput,
  CreateGroupParams,
  CreateMultipleDevicesOutput,
  CreateMultipleDevicesParams,
  Device,
  DevicesOutput,
  DevicesQuery,
  DeviceType,
  DeviceTypesOutput,
  DeviceTypesQuery,
  EnableOrDisableCallbackQuery,
  GetCallbacksNotDeliveredOutput,
  GetCallbacksNotDeliveredQuery,
  GetDeviceLocationsOutput,
  GetDeviceLocationsQuery,
  GetGroupQuery,
  GetMessagesByDeviceTypeQuery,
  GetMessagesOutput,
  GetMessagesQuery,
  GetNumberOfMessagesOutput,
  GetOperatorOutput,
  GetOperatorQuery,
  GetResumeJobStatusOutput,
  GetUndeliveredCallbacksOutput,
  GetUndeliveredCallbacksQuery,
  Group,
  GroupsOutput,
  GroupsQuery,
  JobStatus,
  ProfilesOutput,
  ProfilesQuery,
  ResumeMultipleDevicesOutput,
  ResumeMultipleDevicesParams,
  TransferMultipleDevicesOutput,
  TransferMultipleDevicesParams,
  UnsubscribeMultipleDevicesOutput,
  UnsubscribeMultipleDevicesParams,
  UpdateDeviceParams,
  UpdateDeviceTypeParams,
  UpdateGroupParams,
  UpdateMultipleDevicesOutput,
  UpdateMultipleDevicesParams,
  UpdateOperatorParams,
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

  public devices(params: DevicesQuery = {}): Promise<DevicesOutput> {
    return this.http.get("/devices", params);
  }

  public createDevice(params: CreateDeviceParams): Promise<CreateDeviceOutput> {
    return this.http.post("/devices", params);
  }

  public getDevice(deviceId: string): Promise<Device> {
    return this.http.get(`/devices/${deviceId}`);
  }

  public updateDevice(
    deviceId: string,
    params: UpdateDeviceParams,
  ): Promise<void> {
    return this.http.put(`/devices/${deviceId}`, params);
  }

  public deleteDevice(deviceId: string): Promise<void> {
    return this.http.delete(`/devices/${deviceId}`);
  }

  public getUndeliveredCallbacks(
    deviceId: string,
    query: GetUndeliveredCallbacksQuery = {},
  ): Promise<GetUndeliveredCallbacksOutput> {
    return this.http.get(`/devices/${deviceId}/callbacks-not-delivered`, query);
  }

  public disengageSequenceNumber(deviceId: string): Promise<void> {
    return this.http.post(`/devices/${deviceId}/disengage`);
  }

  public getMessages(
    deviceId: string,
    query: GetMessagesQuery = {},
  ): Promise<GetMessagesOutput> {
    return this.http.get(`/devices/${deviceId}/messages`, query);
  }

  public getNumberOfMessages(
    deviceId: string,
  ): Promise<GetNumberOfMessagesOutput> {
    return this.http.get(`/devices/${deviceId}/messages/metric`);
  }

  public getDeviceLocations(
    deviceId: string,
    query: GetDeviceLocationsQuery,
  ): Promise<GetDeviceLocationsOutput> {
    return this.http.get(`/devices/${deviceId}/locations`, query);
  }

  public createMultipleDevices(
    params: CreateMultipleDevicesParams,
  ): Promise<CreateMultipleDevicesOutput> {
    return this.http.post("/devices/bulk", params);
  }

  public updateMultipleDevices(
    params: UpdateMultipleDevicesParams,
  ): Promise<UpdateMultipleDevicesOutput> {
    return this.http.put("/devices/bluk", params);
  }

  public getJobStatus(jobId: string): Promise<JobStatus> {
    return this.http.get(`/devices/bulk/${jobId}`);
  }

  public resumeMultipleDevices(
    params: ResumeMultipleDevicesParams,
  ): Promise<ResumeMultipleDevicesOutput> {
    return this.http.post("/devices/bulk/resume", params);
  }

  public getResumeJobStatus(jobId: string): Promise<GetResumeJobStatusOutput> {
    return this.http.get(`/devices/bulk/resume/${jobId}`);
  }

  public unsubscribeMultipleDevices(
    params: UnsubscribeMultipleDevicesParams,
  ): Promise<UnsubscribeMultipleDevicesOutput> {
    return this.http.post("/devices/bulk/unsubscribe", params);
  }

  public deviceTypes(query: DeviceTypesQuery = {}): Promise<DeviceTypesOutput> {
    return this.http.get("/device-types", query);
  }

  public createDeviceType(
    params: CreateDeviceTypeParams,
  ): Promise<CreateDeviceTypeOutput> {
    return this.http.post("/device-types", params);
  }

  public transferMultipleDevices(
    params: TransferMultipleDevicesParams,
  ): Promise<TransferMultipleDevicesOutput> {
    return this.http.post("/devices/bulk/transfer", params);
  }

  public getDeviceType(deviceTypeId: string): Promise<DeviceType> {
    return this.http.get(`/device-types/${deviceTypeId}`);
  }

  public updateDeviceType(
    deviceTypeId: string,
    params: UpdateDeviceTypeParams,
  ): Promise<void> {
    return this.http.put(`/device-types/${deviceTypeId}`, params);
  }

  public deleteDeviceType(deviceTypeId: string): Promise<void> {
    return this.http.delete(`/device-types/${deviceTypeId}`);
  }

  public getMessagesByDeviceType(
    deviceTypeId: string,
    query: GetMessagesByDeviceTypeQuery = {},
  ): Promise<GetMessagesOutput> {
    return this.http.get(`/device-types/${deviceTypeId}/messages`, query);
  }

  public enableOrDisableCallback(
    deviceTypeId: string,
    callbackId: string,
    query: EnableOrDisableCallbackQuery,
  ): Promise<void> {
    return this.http.put(
      `/device-types/${deviceTypeId}/callbacks/${callbackId}/enable`,
      query,
    );
  }

  public selectDownlinkCallback(
    deviceTypeId: string,
    callbackId: string,
  ): Promise<void> {
    return this.http.put(
      `/device-types/${deviceTypeId}/callbacks/${callbackId}/downlink`,
    );
  }

  public getCallbacksNotDelivered(
    deviceTypeId: string,
    callbackId: string,
    query: GetCallbacksNotDeliveredQuery = {},
  ): Promise<GetCallbacksNotDeliveredOutput> {
    return this.http.get(
      `/device-types/${deviceTypeId}/callbacks/${callbackId}/callbacks-not-delivered`,
      query,
    );
  }

  public groups(query: GroupsQuery = {}): Promise<GroupsOutput> {
    return this.http.get("/groups", query);
  }

  public createGroup(params: CreateGroupParams): Promise<CreateGroupOutput> {
    return this.http.post("/groups", params);
  }

  public getGroup(groupId: string, query: GetGroupQuery = {}): Promise<Group> {
    return this.http.get(`/groups/${groupId}`, query);
  }

  public updateGroup(
    groupId: string,
    params: UpdateGroupParams,
  ): Promise<void> {
    return this.http.put(`/groups/${groupId}`, params);
  }

  public deleteGroup(groupId: string): Promise<void> {
    return this.http.delete(`/groups/${groupId}`);
  }

  public getOperator(
    operatorId: string,
    query: GetOperatorQuery = {},
  ): Promise<GetOperatorOutput> {
    return this.http.get(`/operators/${operatorId}`, query);
  }

  public updateOperator(
    operatorId: string,
    params: UpdateOperatorParams,
  ): Promise<void> {
    return this.http.put(`/operators/${operatorId}`, params);
  }

  public profiles(query: any = {}): Promise<any> {
    return this.http.get("/profiles", query);
  }

  public getProfile(
    profileId: string,
    query?: ProfilesQuery,
  ): Promise<ProfilesOutput> {
    return this.http.get(`/profiles/${profileId}`, query);
  }

  public users(query: any = {}): Promise<any> {
    return this.http.get("/users", query);
  }

  public createUser(params: any = {}): Promise<any> {
    return this.http.post("/users", params);
  }

  public getUser(userId: string, query: any = {}): Promise<any> {
    return this.http.get(`/users/${userId}`, query);
  }

  public updateUser(userId: string, params: any = {}): Promise<any> {
    return this.http.put(`/users/${userId}`, params);
  }

  public deleteUser(userId: string): Promise<void> {
    return this.http.delete(`/users${userId}`);
  }

  public addUserRoles(userId: string, params: any = {}): Promise<void> {
    return this.http.put(`/users/${userId}/profiles`, params);
  }

  public deleteUserProfiles(
    userId: string,
    profileId: string,
    query: any = {},
  ): Promise<void> {
    return this.http.delete(`/users/${userId}/profiles/${profileId}`, query);
  }

  public contracts(query: any = {}): Promise<any> {
    return this.http.get("/contract-infos", query);
  }

  public getContract(contractId: string, query: any = {}): Promise<any> {
    return this.http.get(`/contract-infos/${contractId}`, query);
  }

  private authHeader() {
    const { username, password } = this.config;
    const basicAuth = "Basic " + btoa(username + ":" + password);

    return { Authorization: basicAuth };
  }
}
