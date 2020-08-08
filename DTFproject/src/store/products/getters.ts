import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { ProductStateInterface } from './state';

const getters: GetterTree<ProductStateInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  }
};

export default getters;
