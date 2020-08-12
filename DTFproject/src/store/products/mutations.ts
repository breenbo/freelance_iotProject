import { MutationTree } from 'vuex';
import { ProductStateInterface } from './state';

const mutation: MutationTree<ProductStateInterface> = {
  setChosenProduct(state: ProductStateInterface, value) {
    state.chosenProduct = value;
  },

  addProduct(state: ProductStateInterface, value) {
    state.products.push(value);
  }
};

export default mutation;
