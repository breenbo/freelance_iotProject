<template>
  <q-page class="row items-center q-px-xl">
    <div class="row full-width items-center">
      <div class="col-5">
        <addProduct />
      </div>
      <div class="col-7 q-pl-lg">
        <q-card class="borderColor">
          <q-card-section class="text-h3 text-weight-light text-grey-7">
            Name the new product
          </q-card-section>
          <q-card-section>
            <q-form
              @submit="onSubmit"
              @reset="onReset"
              class="q-gutter-xl"
            >
              <q-input
                v-model="product.name"
                type="text"
                label="Produc name"
                required
              />

              <div class="row justify-end">
                <q-btn
                  label="Reset"
                  type="reset"
                  color="primary"
                  flat
                  rounded
                />
                <q-btn
                  label="Submit"
                  type="submit"
                  color="primary"
                  class="q-ml-sm"
                  rounded
                  outline
                />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import addProduct from '../components/svg/addProduct.vue';

@Component({
  components: {
    addProduct,
  },
})
export default class NewProduct extends Vue {
  product = {
    name: '',
    numberOfDevices: 0,
    url: 'https://test.com/ota/48af3e',
    id: '',
    lastChecked: {
      lastDay: 0,
      lastWeek: 0,
      lastMonth: 0,
    },
  };

  onSubmit() {
    // set id of the product object
    this.product.id = `${this.product.name}_ID`;
    // add the product to the store
    this.$store.commit('Products/addProduct', this.product);
    // set chosenProduct with the new product
    this.$store.commit('Products/setChosenProduct', this.product);
    // go to firmware page
    this.$router.push('/firmwares');
  }
  onReset() {
    this.product.name = '';
  }
}
</script>

<style lang="sass" scoped>
.borderColor
  border-left: solid 6px $purple
</style>
