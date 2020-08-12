<template>
  <q-page class="q-mx-lg">
    <div class="row justify-center full-height">
      <div class="col-12 col-md-10 q-my-lg">
        <iotSVG />
      </div>
    </div>
    <div
      class="row justify-center text-grey-7 q-my-md q-mb-xl"
      :class="$q.screen.lt.sm ? 'text-h4': $q.screen.lt.md ? 'text-h3' : 'text-h2'"
      v-if="!chosenProduct"
    >
      Manage and update your devices with ease
    </div>
    <div
      class="row text-grey q-my-lg"
      :class="$q.screen.lt.sm ? 'text-h6':'text-h4'"
    >
      Please choose a product :
    </div>
    <div class="row justify-center q-gutter-lg">
      <q-btn
        v-for="product in products"
        :key="product.id"
        :label="product.name"
        color="secondary"
        class="col-2 text-grey-9 q-py-xs"
        unelevated
        @click="setChosenProduct(product)"
        :outline="chosenProduct !== product"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import iotSVG from '../components/svg/iotSVG.vue';
import { products } from '../store/products/state';
import { Firmware } from '../store/firmwares/state';

@Component({
  components: { iotSVG },
})
export default class chooseProduct extends Vue {
  // set datas from the store for less typing
  get products() {
    return this.$store.state.Products.products;
  }
  // computed datas from store
  get chosenProduct(): products {
    return this.$store.state.Products.chosenProduct;
  }

  get firmwares(): Firmware {
    return this.$store.state.Firmwares;
  }

  // store chosen product in the Products store
  setChosenProduct(value: products) {
    this.$store.commit('Products/setChosenProduct', value);
  }
}
</script>