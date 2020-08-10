import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { DevicesStateInterface } from './state';

const actions: ActionTree<DevicesStateInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  }
};

export default actions;
