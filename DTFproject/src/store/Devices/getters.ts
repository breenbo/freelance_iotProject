import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { DevicesStateInterface } from './state';

const getters: GetterTree<DevicesStateInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  }
};

export default getters;
