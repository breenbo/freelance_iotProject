<template>
  <q-page>
    <div
      class="row text-h4 text-grey-6 q-mt-xl"
      :class="$q.screen.lt.md ? 'q-mb-lg' : ''"
    >
      Dashboard for {{ chosenProduct.name }}
    </div>
    <div class="row q-mt-sm" :class="$q.screen.lt.md ? '' : 'q-gutter-lg'">
      <!-- device card -->
      <deviceCard
        class="col-12 col-md"
        :class="$q.screen.lt.md ? 'q-mb-lg' : ''"
      />

      <!-- firmware card, only if firmware exists -->
      <firmwareCard v-if="chosenFirmware" class="col-12 col-md" />
    </div>
    <!-- timegraph card -->
    <div class="row q-my-lg">
      <timeCard />
    </div>
    <!-- </div>
    </transition> -->
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
// import chooseProduct from '../components/chooseProduct.vue';
import deviceCard from '../components/deviceCard/deviceCard.vue';
import firmwareCard from '../components/firmwareCard/firmwareCard.vue';
import timeCard from '../components/timeCard/timeCard.vue';
import { products } from '../store/products/state';
import { Firmware } from '../store/firmwares/state';

@Component({
  components: { deviceCard, firmwareCard, timeCard }
})
export default class Home extends Vue {
  // computed datas from store
  get chosenProduct(): products {
    return this.$store.state.Products.chosenProduct as products;
  }
  get chosenFirmware(): Firmware {
    return this.$store.state.Firmwares[this.chosenProduct.id] as Firmware;
  }
}
</script>

<style lang="sass" scoped>
.fadeOut
  animation-duration: 200ms

.fadeIn
  animation-delay: 200ms
  animation-duration: 500ms
</style>
