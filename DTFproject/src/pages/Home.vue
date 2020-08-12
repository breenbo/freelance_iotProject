<template>
  <q-page>
    <chooseProduct v-if="!chosenProduct" />
    <div v-else>
      <div class="row text-h4 text-grey-6 q-mt-xl">
        Dashboard for {{ chosenProduct.name}}
      </div>
      <div class="row q-gutter-lg q-mt-sm">
        <!-- device card -->
        <deviceCard />

        <!-- firmware card, only if firmware exists -->
        <firmwareCard v-if="chosenFirmware" />
      </div>
      <!-- timegraph card -->
      <div class="row q-my-lg">
        <timeCard />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import chooseProduct from '../components/chooseProduct.vue';
import deviceCard from '../components/deviceCard/deviceCard.vue';
import firmwareCard from '../components/firmwareCard/firmwareCard.vue';
import timeCard from '../components/timeCard/timeCard.vue';
import { products } from '../store/products/state';
import { Firmware } from '../store/firmwares/state';

@Component({
  components: { chooseProduct, deviceCard, firmwareCard, timeCard },
})
export default class Home extends Vue {
  // computed datas from store
  get chosenProduct(): products {
    return this.$store.state.Products.chosenProduct;
  }
  get chosenFirmware(): Firmware {
    return this.$store.state.Firmwares[this.chosenProduct.id];
  }
}
</script>

<style lang="sass" scoped>
</style>
