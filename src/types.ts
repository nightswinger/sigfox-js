export type Callback = {
  subject?: string;
  message?: string;
  url?: string;
  headers?: any;
  body?: string;
  contentType?: string;
  method?: string;
  error?: string;
};

export type CertificateUpdate = {
  key?: string;
};

export type ComputedLocation = {
  lat?: number;
  lng?: number;
  radius?: number;
  source?: number;
  placeIds?: string[];
};

export type CreateDeviceOutput = {
  id?: string;
};

export type CreateDeviceParams = {
  id: string;
  name: string;
  activable?: boolean;
  automaticRenewal?: boolean;
  lat?: number;
  lng?: number;
  productCertificate?: object;
  prototype?: boolean;
  deviceTypeId: string;
  pac: string;
};

export type CreateMultipleDevicesOutput = {
  total?: number;
  jobId?: string;
};

export type CreateMultipleDevicesParams = {
  deviceTypeId: string;
  productCertificate?: CertificateUpdate;
  prototype?: boolean;
  prefix?: string;
  data?: DeviceCreate[];
};

export type Device = {
  id: string;
  name: string;
  satelliteCapable?: boolean;
  repeater?: boolean;
  messageModulo?: number;
  deviceType?: MinimalDeviceType;
  contract?: MinimalContract;
  group?: MinimalGroup;
  modemCertificate?: Certificate;
  prototype?: boolean;
  productCertificate?: Certificate;
  location?: DeviceLocation;
  lastComputedLocation?: LastComputedLocation;
  pac: string;
  sequenceNumber?: number;
  trashSequenceNumber?: number;
  lastCom?: number;
  lqi?: number;
  activationTime?: number;
  creationTime: number;
  state: number;
  comState: number;
  token?: Token;
  unsubscriptionTime?: number;
  createdBy?: string;
  lastEditionTime?: number;
  lastEditedBy?: string;
  automaticRenewal: boolean;
  automaticRenewalStatus?: number;
  activable?: boolean;
  actions?: string[];
  resources?: string[];
};

export type DeviceCreate = {
  id: string;
  pac?: string;
  name?: string;
  lat?: number;
  lng?: number;
  automaticRenewal?: boolean;
  activable?: boolean;
};

export type DeviceEditionBulk = {
  activable?: boolean;
  automaticRenewal?: boolean;
  lat?: number;
  lng?: number;
  productCertificate?: any;
  prototype?: boolean;
  id: string;
  name?: string;
};

export type DeviceErrorMessage = {
  deviceId?: string;
  deviceTypeId?: string;
  time?: number;
  data?: string;
  status?: string;
  message?: string;
  callback?: Callback;
  parameters?: any;
};

export type DeviceMessage = {
  device?: any;
  time?: number;
  data?: string;
  ackRequired?: boolean;
  lqi?: number;
  lqiRepeaters?: number;
  seqNumber?: number;
  nbFrames?: number;
  computedLocation?: ComputedLocation[];
  rinfos?: Rinfo[];
  donwlinkAnswerStatus?: DownlinkAnswerStatus;
};

export type DevicesOutput = {
  data?: Device[];
  actions?: string[];
  paging?: object;
};

export type DevicesQuery = {
  id?: string;
  groupIds?: string[];
  deep?: boolean;
  authorizations?: boolean;
  deviceTypeId?: string;
  operatorId?: string;
  sort?: string;
  minId?: string;
  maxId?: string;
  fields?: string;
  limit?: number;
  offset?: number;
  pageId?: string;
};

export type DeviceType = {
  name?: string;
  description?: string;
  downlinkMode?: number;
  downlinkDataString?: string;
  payloadType?: number;
  payloadConfig?: string;
  keepAlive?: number;
  alertEmail?: string;
  automaticRenewal?: boolean;
  id?: string;
  group?: object;
  contract?: object;
  contracts?: object[];
  detachedContracts?: object[];
  geolocPayloadConfig?: object;
  creationTime?: number;
  createdBy?: string;
  lastEditionTime?: number;
  lastEditedBy?: string;
};

export type DeviceTypesOutput = {
  data?: DeviceType[];
  actions?: string[];
  paging?: Pagination;
};

export type DeviceTypesQuery = {
  name?: string;
  groupIds?: string[];
  deep?: boolean;
  contractId?: string;
  payloadType?: number;
  authorizations?: boolean;
  sort?: string;
  fields?: string;
  limit?: number;
  offset?: number;
  pageId?: string;
};

export type DownlinkAnswerStatus = {
  baseStation?: any;
  plannedPower?: number;
  data?: string;
  operator?: string;
  country?: string;
};

export type GetDeviceLocationsOutput = {
  data?: DeviceLocation[];
  paging?: Pagination;
};

export type GetDeviceLocationsQuery = {
  oob?: boolean;
  since?: number;
  before?: number;
  limit?: number;
  offset?: number;
};

export type GetUndeliveredCallbacksOutput = {
  data?: DeviceErrorMessage[];
  paging?: Pagination;
};

export type GetUndeliveredCallbacksQuery = {
  since?: number;
  before?: number;
  limit?: number;
  offset?: number;
};

export type GetMessagesOutput = {
  data?: DeviceMessage[];
  paging?: Pagination;
};

export type GetMessagesQuery = {
  fields?: string;
  since?: number;
  before?: number;
  limit?: number;
  offset?: number;
};

export type GetNumberOfMessagesOutput = {
  lastDay?: number;
  lastWeek?: number;
  lastMonth?: number;
};

export type Group = {
  name?: string;
  description?: string;
  type?: number;
  timezone?: string;
  id?: string;
  nameCI?: string;
  path?: any;
  createdBy?: string;
  creationTime?: number;
  leaf?: boolean;
  actions?: string[];
  networkOperatorId?: string;
};

export type JobStatus = {
  jobDone?: boolean;
  total?: number;
  status?: object;
};

export type Pagination = {
  next?: string;
};

export type Rinfo = {
  baseStation?: any;
  rssi?: number;
  rssiRepeaters?: number;
  lat?: number;
  lng?: number;
  delay?: number;
  freq?: number;
  freqRepeaters?: number;
  rep?: number;
  repetitions?: any[];
  cbStatus?: any[];
};

export type MinimalDeviceType = {
  id?: string;
  name?: string;
  actions?: string[];
  resources?: string[];
};

export type MinimalContract = {
  id?: string;
  name?: string;
  actions?: string[];
  resources?: string[];
};

export type MinimalGroup = {
  id?: string;
  name?: string;
  type?: number;
  level?: number;
  actions?: string[];
  resources?: string[];
};

export type Certificate = {
  id?: string;
  key?: string;
};

export type DeviceLocation = {
  lat?: number;
  lng?: number;
};

export type LastComputedLocation = {
  lat?: number;
  lng?: number;
  radius?: number;
  sourceCode?: number;
  placeIds?: string[];
};

export type Token = {
  state?: number;
  detailMessage?: string;
  end?: number;
  freeMessages?: number;
  freeMessagesSent?: number;
};

export type UpdateDeviceParams = {
  activable?: boolean;
  automaticRenewal?: boolean;
  lat?: number;
  lng?: number;
  productCertificate?: object;
  prototype?: boolean;
  name?: string;
};

export type createGroupParams = {
  name: string;
  description: string;
  type: number;
  timezone: string;
  parentId: string;
  networkOperatorId?: string;
};

export type groupsQueryParams = {
  parentIds?: string[];
  deep?: boolean;
  name?: string;
  types?: number[];
  fields?: string;
  action?: string;
  sort?: string;
  authorizations?: boolean;
  limit?: number;
  offset?: number;
  pageId?: string;
};

export type updateMultipleDevicesParams = {
  data: DeviceEditionBulk[];
};

export type transferMultipleDevicesParams = {
  deviceTypeId: string;
  data?: {
    id: string;
    keepHistory?: boolean;
    activable?: boolean;
  }[];
};

export type updateDeviceTypeParams = {
  name?: string;
  description?: string;
  donwlinkMode?: number;
  downlinkDataString?: string;
  payloadType?: number;
  payloadConfig?: string;
  keepAlive?: number;
  alertEmail?: string;
  automaticRenewal?: boolean;
  contractId?: string;
  contracts?: string[];
  geolocPayloadConfigId?: string;
};
