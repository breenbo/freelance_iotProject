<template>
  <div>
    <q-tree
      :nodes="firmwares[chosenProduct.id].versions"
      node-key="label"
      selected-color="primary"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class versionList extends Vue {
  // computed datas from store
  get chosenProduct() {
    return this.$store.state.Products.chosenProduct;
  }

  get firmwares() {
    return this.$store.state.Firmwares;
  }
}
</script>