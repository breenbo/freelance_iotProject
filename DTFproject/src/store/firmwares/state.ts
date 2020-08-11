export interface Firmware {
  version: number;
  numberInUse: number;
  releaseNote: string;
  size: number;
  default: boolean;
  signed: boolean;
  createdAt: string;
}

export interface versionTree {
  label: string;
  numberInUse: number;
  children?: versionTree[];
}

export interface FirmwareStateInterface {
  [deviceID: string]: {
    default: Firmware;
    other: Firmware[];
    versions?: versionTree[];
  };
}

const state: FirmwareStateInterface = {
  T800_ID: {
    default: {
      version: 12,
      numberInUse: 1200,
      releaseNote:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, quidem! Cumque necessitatibus iste minima repellendus modi ipsa, enim iusto deserunt. Nesciunt quod quia necessitatibus eligendi totam facilis perferendis rem accusantium?',
      size: 12,
      default: true,
      signed: true,
      createdAt: '2020/08/07'
    },
    other: [
      {
        version: 0.1,
        numberInUse: 0,
        releaseNote:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, quidem! Cumque necessitatibus iste minima repellendus modi ipsa, enim iusto deserunt. Nesciunt quod quia necessitatibus eligendi totam facilis perferendis rem accusantium?',
        default: false,
        size: 11,
        signed: false,
        createdAt: '2017/08/07'
      },
      {
        version: 0.2,
        numberInUse: 4,
        releaseNote:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, quidem! Cumque necessitatibus iste minima repellendus modi ipsa, enim iusto deserunt. Nesciunt quod quia necessitatibus eligendi totam facilis perferendis rem accusantium?',
        default: false,
        signed: false,
        size: 18,
        createdAt: '2020/08/07'
      },
      {
        version: 0.3,
        numberInUse: 14,
        releaseNote:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, quidem! Cumque necessitatibus iste minima repellendus modi ipsa, enim iusto deserunt. Nesciunt quod quia necessitatibus eligendi totam facilis perferendis rem accusantium?',
        default: false,
        size: 1,
        signed: false,
        createdAt: '2020/08/07'
      },
      {
        version: 0.4,
        numberInUse: 6,
        releaseNote:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, quidem! Cumque necessitatibus iste minima repellendus modi ipsa, enim iusto deserunt. Nesciunt quod quia necessitatibus eligendi totam facilis perferendis rem accusantium?',
        default: false,
        size: 1200,
        signed: false,
        createdAt: '2020/08/07'
      },
      {
        version: 14,
        numberInUse: 0,
        releaseNote:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, quidem! Cumque necessitatibus iste minima repellendus modi ipsa, enim iusto deserunt. Nesciunt quod quia necessitatibus eligendi totam facilis perferendis rem accusantium?',
        default: false,
        size: 100,
        signed: true,
        createdAt: '2020/08/07'
      }
    ]
  },
  AVA_ID: {
    default: {
      version: 2,
      numberInUse: 1,
      releaseNote:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, quidem! Cumque necessitatibus iste minima repellendus modi ipsa, enim iusto deserunt. Nesciunt quod quia necessitatibus eligendi totam facilis perferendis rem accusantium?',
      default: true,
      size: 12,
      signed: true,
      createdAt: '2020/08/07'
    },
    other: [
      // { version: '0.1', numberInUse: 2 },
      // { version: '1.2', numberInUse: 14 }
    ]
  }
  // HAL_ID: {
  //   default: {
  //     version: 55,
  //     numberInUse: 10,
  //     releaseNote:
  //       'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, quidem! Cumque necessitatibus iste minima repellendus modi ipsa, enim iusto deserunt. Nesciunt quod quia necessitatibus eligendi totam facilis perferendis rem accusantium?',
  //     default: true,
  //     size: 12,
  //     signed: true,
  //     createdAt: '2020/08/07'
  //   },
  //   other: [
  //     {
  //       version: 0.1,
  //       numberInUse: 2,
  //       releaseNote:
  //         'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, quidem! Cumque necessitatibus iste minima repellendus modi ipsa, enim iusto deserunt. Nesciunt quod quia necessitatibus eligendi totam facilis perferendis rem accusantium?',
  //       default: false,
  //       size: 12,
  //       signed: false,
  //       createdAt: '2020/08/07'
  //     },
  //     {
  //       version: 2.2,
  //       numberInUse: 4,
  //       releaseNote:
  //         'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, quidem! Cumque necessitatibus iste minima repellendus modi ipsa, enim iusto deserunt. Nesciunt quod quia necessitatibus eligendi totam facilis perferendis rem accusantium?',
  //       default: false,
  //       size: 12,
  //       signed: false,
  //       createdAt: '2020/08/07'
  //     },
  //     {
  //       version: 5,
  //       numberInUse: 4,
  //       releaseNote:
  //         'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, quidem! Cumque necessitatibus iste minima repellendus modi ipsa, enim iusto deserunt. Nesciunt quod quia necessitatibus eligendi totam facilis perferendis rem accusantium?',
  //       default: false,
  //       signed: true,
  //       size: 12,
  //       createdAt: '2020/08/07'
  //     },
  //     {
  //       version: 50,
  //       numberInUse: 9,
  //       releaseNote:
  //         'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, quidem! Cumque necessitatibus iste minima repellendus modi ipsa, enim iusto deserunt. Nesciunt quod quia necessitatibus eligendi totam facilis perferendis rem accusantium?',
  //       default: false,
  //       size: 12,
  //       signed: true,
  //       createdAt: '2020/08/07'
  //     },
  //     {
  //       version: 60,
  //       numberInUse: 3,
  //       releaseNote:
  //         'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, quidem! Cumque necessitatibus iste minima repellendus modi ipsa, enim iusto deserunt. Nesciunt quod quia necessitatibus eligendi totam facilis perferendis rem accusantium?',
  //       default: false,
  //       size: 12,
  //       signed: false,
  //       createdAt: '2020/08/17'
  //     }
  //   ]
  // }
};

export default state;
