<template>
  <!-- devices card -->
  <q-card class="col deviceCard column">
    <q-card-section class="col">
      <div class="text-h4 text-grey-7">
        {{ chosenProduct.numberOfDevices | niceNumber }}
        <span class="text-h5 text-grey-6">
          devices
        </span>
      </div>
    </q-card-section>
    <q-card-section class="col text-h5 text-grey-7">
      <q-btn
        flat
        size="xl"
        icon="link"
        :label="chosenProduct.url"
        type="a"
        target="_blank"
        :href="chosenProduct.url"
        no-caps
      />
      <!-- <q-icon
              name="link"
              class="text-h4"
            />
            {{ chosenProduct.url }} -->
    </q-card-section>
    <q-separator inset />
    <q-card-actions
      align="center"
      class="col-auto"
    >
      <q-btn
        class="full-width"
        flat
        label="Manage devices"
        to="/devices"
      />
    </q-card-actions>
  </q-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { products } from '../../store/products/state';

@Component({
  filters: {
    niceNumber(value: number): string {
      return value.toLocaleString('us');
    },
  },
})
export default class deviceCard extends Vue {
  // computed datas from store
  get chosenProduct(): products {
    return this.$store.state.Products.chosenProduct;
  }
}
</script>

<style lang="sass" scoped>
.deviceCard
  // border-top: solid 6px $primary
  border-left: solid 6px $primary
</style>