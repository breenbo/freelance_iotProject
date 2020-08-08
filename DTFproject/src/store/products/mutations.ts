import { MutationTree } from 'vuex';
import { ProductStateInterface } from './state';

const mutation: MutationTree<ProductStateInterface> = {
  setChosenProduct(state: ProductStateInterface, value) {
    state.chosenProduct = value;
  }
};

export default mutation;
