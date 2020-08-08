import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { FirmwareStateInterface } from './state';

const actions: ActionTree<FirmwareStateInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  }
};

export default actions;
