export type DeviceType = {
  name?: string,
  description?: string,
  downlinkMode?: number,
  downlinkDataString?: string,
  payloadType?: number,
  payloadConfig?: string,
  keepAlive?: number,
  alertEmail?: string,
  automaticRenewal?: boolean,
  id?: string,
  group?: object,
  contract?: object,
  contracts?: object[],
  detachedContracts?: object[],
  geolocPayloadConfig?: object,
  creationTime?: number,
  createdBy?: string,
  lastEditionTime?: number,
  lastEditedBy?: string
}

export type deviceTypeList = {
  data?: DeviceType[],
  actions?: string[],
  paging?: object
}

export type devicesQueryParams = {
  id?: string,
  groupIds?: string[],
  deep?: boolean,
  authorizations?: boolean,
  deviceTypeId?: string,
  operatorId?: string,
  sort?: string,
  minId?: string,
  maxId?: string,
  fields?: string,
  limit?: number,
  offset?: number,
  pageId?: string
}

export type createDeviceParams = {
  id: string,
  name: string,
  activable?: boolean,
  automaticRenewal?: boolean,
  lat?: number,
  lng?: number,
  productCertificate?: object,
  prototype?: boolean,
  deviceTypeId: string,
  pac: string
}

export type updateDeviceParams = {
  activable?: boolean,
  automaticRenewal?: boolean,
  lat?: number,
  lng?: number,
  productCertificate?: object,
  prototype?: boolean,
  name?: string
}

export type transferMultipleDevicesParams = {
  deviceTypeId: string,
  data?: {
    id: string,
    keepHistory?: boolean,
    activable?: boolean
  }[]
}

export type updateDeviceTypeParams = {
  name?: string,
  description?: string,
  donwlinkMode?: number,
  downlinkDataString?: string,
  payloadType?: number,
  payloadConfig?: string,
  keepAlive?: number,
  alertEmail?: string,
  automaticRenewal?: boolean,
  contractId?: string,
  contracts?: string[],
  geolocPayloadConfigId?: string
}
