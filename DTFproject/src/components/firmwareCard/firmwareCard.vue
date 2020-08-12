<template>
  <q-card class="firmwareCard">
    <q-card-section>
      <div class="row text-h4 text-grey-7">
        <div class="col">
          {{ numberBinary }}
          <span class="text-h5 text-grey-6">
            firmware<span v-if="numberBinary > 1">s</span><span v-if="$q.screen.gt.xs"> uploaded</span>
          </span>
        </div>
        <div class="col-auto text-grey-7">
          <q-chip
            class="text-h6 q-ma-none"
            outline
            color="positive"
            icon="verified"
            :label="`v${firmwares[chosenProduct.id].default.version}`"
          />
        </div>
      </div>
    </q-card-section>
    <q-card-section>
      <versionTable />
    </q-card-section>
    <q-separator inset />
    <q-card-actions
      align="center"
      class="col-auto"
    >
      <q-btn
        class="full-width"
        flat
        label="Manage firmwares"
        to="/firmwares"
      />
    </q-card-actions>
  </q-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import versionTable from './versionTable.vue';
import { products } from '../../store/products/state';
import { Firmware } from '../../store/firmwares/state';

@Component({
  components: { versionTable },
  filters: {
    niceNumber(value: number): string {
      return value.toLocaleString('us');
    },
  },
})
export default class Home extends Vue {
  // computed datas from store
  get chosenProduct(): products {
    return this.$store.state.Products.chosenProduct;
  }

  get firmwares(): Firmware {
    return this.$store.state.Firmwares;
  }

  // calculate number of binaries : older array length + 1 (default firmware)
  get numberBinary(): number {
    return this.firmwares[this.chosenProduct.id].other.length + 1;
  }
}
</script>

<style lang="sass" scoped>
.firmwareCard
  border-left: solid 6px $positive
</style>
