import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { FirmwareStateInterface } from './state';

const getters: GetterTree<FirmwareStateInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  }
};

export default getters;
