import { MutationTree } from 'vuex';
import { ProductStateInterface, products } from './state';

const mutation: MutationTree<ProductStateInterface> = {
  setChosenProduct(state: ProductStateInterface, value: products) {
    state.chosenProduct = value;
  },

  addProduct(state: ProductStateInterface, value: products) {
    state.products.push(value);
  }
};

export default mutation;
