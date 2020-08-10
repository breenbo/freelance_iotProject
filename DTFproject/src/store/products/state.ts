export interface checked {
  lastDay: number;
  lastWeek: number;
  lastMonth: number;
}
export interface products {
  name: string;
  numberOfDevices: number;
  url: string;
  id: string;
  lastChecked: checked;
}

export interface ProductStateInterface {
  chosenProduct: string;
  products: products[];
}

const state: ProductStateInterface = {
  chosenProduct: '',
  products: [
    {
      name: 'T800',
      numberOfDevices: 8000000,
      url: 'https://test.com/ota/48af3e',
      id: 'T800_ID',
      lastChecked: {
        lastDay: 1,
        lastWeek: 2,
        lastMonth: 3
      }
    },
    {
      name: 'AVA',
      numberOfDevices: 1000,
      url: 'https://test.com/ota/43fjs5',
      id: 'AVA_ID',
      lastChecked: {
        lastDay: 1,
        lastWeek: 6,
        lastMonth: 13
      }
    },
    {
      name: 'HAL',
      numberOfDevices: 10,
      url: 'https://test.com/ota/88wxc4',
      id: 'HAL_ID',
      lastChecked: {
        lastDay: 1,
        lastWeek: 9,
        lastMonth: 9
      }
    }
  ]
};

export default state;
