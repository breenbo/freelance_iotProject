<template>
  <q-page class="row items-center q-px-xl">
    <div class="row full-width">
      <div
        class="col-5 cursor-pointer"
        @click="addProduct"
      >
        <addProduct />
      </div>
      <div class="col-7">
        When a user wants to create a new product a dialog or q-page should be displayed that
        prompts for the following information:
        ● Name of the product
        The newly created product becomes the active product in the dashboard and it’s name should
        be displayed in the header area. Upon creation the app should transition to the Firmware
        Overview screen so a firmware binary can be uploaded.
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
  addProduct() {
    alert('product added');
  }
}
</script>

<style lang="scss" scoped>
</style>
