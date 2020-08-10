<template>
  <div>
    <span class="text-h6 text-grey-6">Versions</span>
    <q-list class="q-mx-xl text-subtitle1">
      <q-item>
        <q-item-section>
          <q-item-label>{{ firmwares[chosenProduct.id].default.version }}</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ firmwares[chosenProduct.id].default.numberInUse }}</q-item-label>
        </q-item-section>
      </q-item>
      <q-item
        v-for="firmware in firmwares[chosenProduct.id].older"
        :key="firmware.id"
        class="text-grey-7"
      >
        <q-item-section>v{{ firmware.version }}</q-item-section>
        <q-item-section>{{ firmware.numberInUse }}</q-item-section>
      </q-item>
    </q-list>
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