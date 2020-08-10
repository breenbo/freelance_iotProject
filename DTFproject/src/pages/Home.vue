<template>
  <q-page class="q-mt-lg">
    <div class="row items-center q-gutter-lg">
      <div class="col-7 q-my-lg">
        <iotSVG />
      </div>
      <div class="col">
        <div class="row text-h2 text-grey-7 q-my-md">
          Manage and update <br />with ease
        </div>
        <div class="row text-h4 text-grey q-mb-lg">
          Please chose a product :
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
      </div>
    </div>
    <div class="row justify-center text-h2 text-grey-7 q-my-md q-mb-xl">
      Manage and update your devices with ease
    </div>
    <div class="row text-h4 text-grey q-my-lg">
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
    <div v-if="chosenProduct">
      <div class="row q-gutter-lg q-mt-lg">
        <!-- device card -->
        <deviceCard />

        <!-- firmware card -->
        <firmwareCard />
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
import iotSVG from '../components/svg/iotSVG.vue';
// import versionList from '../components/versionList.vue';
// import versionTree from '../components/versionTree.vue';
import deviceCard from '../components/deviceCard/deviceCard.vue';
import firmwareCard from '../components/firmwareCard/firmwareCard.vue';
import timeCard from '../components/timeCard/timeCard.vue';

@Component({
  components: { iotSVG, deviceCard, firmwareCard, timeCard }
})
export default class Home extends Vue {
  // set datas from the store for less typing
  get products() {
    return this.$store.state.Products.products;
  }
  // computed datas from store
  get chosenProduct() {
    return this.$store.state.Products.chosenProduct;
  }

  get firmwares() {
    return this.$store.state.Firmwares;
  }

  // store chosen product in the Products store
  setChosenProduct(value) {
    this.$store.commit('Products/setChosenProduct', value);
  }
}
</script>

<style lang="sass" scoped>
.pageContainer
  max-width: 1200px !important
  // margin: 50px auto 0 auto
  margin: 0 auto

.deviceCard
  // border-top: solid 6px $primary
  border-left: solid 6px $primary

.firmwareCard
  border-left: solid 6px $teal-5

.timeCard
  border-left: solid 6px $secondary
</style>
