export interface Device {
  name: string;
  macAdress: string;
  firmware: string;
  lastCheck: string;
  lastUpdate: string;
}

export interface DevicesStateInterface {
  [productID: string]: Device[];
}

const state: DevicesStateInterface = {
  T800_ID: [
    {
      name: 'Red eye',
      macAdress: '33:33:11:22:33:44',
      firmware: 'v1',
      lastCheck: '2020/05/03',
      lastUpdate: '1987/06/04'
    },
    {
      name: 'Strong Arm',
      macAdress: '33:33:11:55:11:99',
      firmware: 'v10',
      lastCheck: '2020/01/03',
      lastUpdate: '2019/06/04'
    },
    {
      name: 'Iron Tooth',
      macAdress: '33:33:11:69:41:00',
      firmware: 'v6',
      lastCheck: '2020/08/03',
      lastUpdate: '2019/04/04'
    }
  ],
  AVA_ID: [
    {
      name: 'Fancy smile',
      macAdress: '33:33:88:21:34:44',
      firmware: 'v8',
      lastCheck: '2019/08/03',
      lastUpdate: '2017/09/01'
    },
    {
      name: 'Psycho Mind',
      macAdress: '33:33:67:90:45:29',
      firmware: 'v1',
      lastCheck: '2020/07/01',
      lastUpdate: '2019/10/31'
    }
  ]
};

export default state;
