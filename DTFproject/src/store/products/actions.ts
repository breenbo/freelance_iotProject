import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { ProductStateInterface } from './state';

const actions: ActionTree<ProductStateInterface, StateInterface> = {
  setChosenProduct(value) {
    // commit('setChosenProduct', value);
    console.log('Fire action ', value);
  }
};

export default actions;
