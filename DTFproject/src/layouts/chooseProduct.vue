<template>
  <!-- create layout with choose product in each concerned page -->
  <q-page>
    <transition
      enter-active-class="fadeIn"
      leave-active-class="fadeOut"
    >
      <chooseProduct
        v-if="!chosenProduct"
        :key="'chooseProduct'"
      />
      <div
        v-else
        :key="'dashboard'"
      >
        <!-- inject specific pages in this layout -->
        <router-view></router-view>
      </div>
    </transition>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import chooseProduct from '../components/chooseProduct.vue';
// import deviceCard from '../components/deviceCard/deviceCard.vue';
// import firmwareCard from '../components/firmwareCard/firmwareCard.vue';
// import timeCard from '../components/timeCard/timeCard.vue';
import { products } from '../store/products/state';
import { Firmware } from '../store/firmwares/state';

@Component({
  components: { chooseProduct },
})
export default class Home extends Vue {
  // computed datas from store
  get chosenProduct(): products {
    return this.$store.state.Products.chosenProduct;
  }
  // get chosenFirmware(): Firmware {
  //   return this.$store.state.Firmwares[this.chosenProduct.id];
  // }
}
</script>

<style lang="sass" scoped>
.fadeOut
  animation-duration: 200ms

.fadeIn
  animation-delay: 200ms
  animation-duration: 500ms
</style>