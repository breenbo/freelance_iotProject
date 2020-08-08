export interface products {
  name: string;
  numberOfDevices: number;
  url: string;
  id: string;
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
      id: 'T800_ID'
    },
    {
      name: 'AVA',
      numberOfDevices: 1000,
      url: 'https://test.com/ota/43fjs5',
      id: 'AVA_ID'
    },
    {
      name: 'HAL',
      numberOfDevices: 10,
      url: 'https://test.com/ota/88wxc4',
      id: 'HAL_ID'
    }
  ]
};

export default state;
