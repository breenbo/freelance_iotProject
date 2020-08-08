export interface Firmware {
  version: string;
  numberInUse: number;
}

export interface FirmwareStateInterface {
  [deviceID: string]: {
    default: Firmware;
    older: Firmware[];
    newer?: Firmware[];
  };
}

const state: FirmwareStateInterface = {
  T800_ID: {
    default: { version: 'v12', numberInUse: 1200 },
    older: [
      { version: '0.1', numberInUse: 2 },
      { version: '0.2', numberInUse: 4 }
    ],
    newer: [{ version: 'v14', numberInUse: 0 }]
  },
  AVA_ID: {
    default: { version: 'v2', numberInUse: 1 },
    older: [
      { version: '0.1', numberInUse: 2 },
      { version: '1.2', numberInUse: 14 }
    ]
  },
  HAL_ID: {
    default: { version: 'v55', numberInUse: 10 },
    older: [
      { version: '0.1', numberInUse: 2 },
      { version: '2.2', numberInUse: 4 },
      { version: '5', numberInUse: 4 },
      { version: '50', numberInUse: 9 }
    ]
  }
};

export default state;
