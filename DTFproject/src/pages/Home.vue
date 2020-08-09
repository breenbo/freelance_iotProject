<template>
  <q-page class="q-mt-lg">
    <div class="row items-center q-gutter-lg">
      <div class="col-7 q-my-lg">
        <iotSVG />
      </div>
      <div class="col">
        <div class="row text-h2 text-grey-7 q-my-md">Manage and update <br />with ease</div>
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
    <div
      v-if="chosenProduct"
      class="pageContainer"
    >
      <div class="row q-gutter-lg q-mt-lg">
        <q-card
          class="col"
          flat
          bordered
        >
          <q-card-section>
            <div class="text-h6 text-grey-7">Devices</div>
          </q-card-section>
          <q-separator inset />
          <q-card-section>
            Total number: {{ chosenProduct.numberOfDevices }}
            <br />URL: {{ chosenProduct.url }}
          </q-card-section>
        </q-card>
        <q-card
          class="col"
          flat
          bordered
        >
          <q-card-section>
            <div class="text-h6 text-grey-7">Firmwares</div>
          </q-card-section>
          <q-separator inset />
          <q-card-section>
            Default Firmware: {{ firmwares[chosenProduct.id].default.version }}
            <br />All firmwares
            <br />Uploaded
          </q-card-section>
        </q-card>
      </div>
      <div class="row q-mt-lg">
        <q-card
          class="col"
          flat
          bordered
        >
          <q-card-section>
            <div class="text-h6 text-grey-7">Timegraf</div>
            <div class="text-subtitle2 text-grey-6">checked devices</div>
          </q-card-section>
          <q-separator inset />
          <q-card-section>
            day
            <br />week
            <br />month
          </q-card-section>
        </q-card>
      </div>
    </div>

    <br />The main dashboard (home route) will have a visual overview that allows the user to see some
    basic information about the active product. Multiple products can be created from the left
    drawer.
    The dashboard will show the following information in some form:
    <ul>
      <li>The product-specific URL used by devices to request OTA updates. An example of this URL’s form is https://test.com/ota/48af3e</li>
      <li>Current default firmware version for the active product</li>
      <li>All firmwares in use and how many devices are on each one (e.g 500 devices on v0.1.1, 15 devices on v0.1.2 and 3 devices on v0.1.3)</li>
      <li>Number of firmware binaries uploaded for the active product.</li>
      <li>Time graph of how many devices have checked in over the last day/week/month</li>
    </ul>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import iotSVG from '../components/svg/iotSVG.vue';

@Component({
  components: { iotSVG },
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
</style>