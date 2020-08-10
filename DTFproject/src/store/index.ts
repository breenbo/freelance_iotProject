import { store } from 'quasar/wrappers';
import Vuex from 'vuex';

import Products from './products';
import Firmwares from './firmwares';
import Devices from './Devices';
import { ProductStateInterface } from './products/state';
import { FirmwareStateInterface } from './firmwares/state';
import { DevicesStateInterface } from './Devices/state';

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export interface StateInterface {
  // Define your own store structure, using submodules if needed
  Products: ProductStateInterface;
  Firmwares: FirmwareStateInterface;
  Devices: DevicesStateInterface;
}

export default store(function({ Vue }) {
  Vue.use(Vuex);

  const Store = new Vuex.Store<StateInterface>({
    modules: {
      Products,
      Firmwares,
      Devices
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEV
  });

  return Store;
});
