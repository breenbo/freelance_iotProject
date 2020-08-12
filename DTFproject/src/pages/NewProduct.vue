<template>
  <svgForm>
    <template v-slot:svg>
      <addProduct />
    </template>
    <template v-slot:cardForm>
      <q-card class="borderColor">
        <q-card-section class="text-h3 text-weight-light text-grey-7">
          Choose a new name
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
              label="Product name"
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
    </template>
  </svgForm>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import addProduct from '../components/svg/addProduct.vue';
// use template with named slots because same template for both pages
import svgForm from '../components/svgForm.vue';

@Component({
  components: {
    addProduct,
    svgForm,
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
