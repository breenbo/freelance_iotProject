export interface Firmware {
  version: string;
  numberInUse: number;
}

export interface versionTree {
  label: string;
  numberInUse: number;
  children?: versionTree[];
}

export interface FirmwareStateInterface {
  [deviceID: string]: {
    default: Firmware;
    older: Firmware[];
    versions?: versionTree[];
    newer?: Firmware[];
  };
}

const state: FirmwareStateInterface = {
  T800_ID: {
    default: { version: '12', numberInUse: 1200 },
    older: [
      { version: '0.1', numberInUse: 2 },
      { version: '0.2', numberInUse: 4 }
    ],
    newer: [{ version: '14', numberInUse: 0 }]
  },
  AVA_ID: {
    default: { version: '2', numberInUse: 1 },
    older: [
      // { version: '0.1', numberInUse: 2 },
      // { version: '1.2', numberInUse: 14 }
    ]
  },
  HAL_ID: {
    default: { version: '55', numberInUse: 10 },
    older: [
      { version: '0.1', numberInUse: 2 },
      { version: '2.2', numberInUse: 4 },
      { version: '5', numberInUse: 4 },
      { version: '50', numberInUse: 9 }
    ]
  }
};

export default state;
