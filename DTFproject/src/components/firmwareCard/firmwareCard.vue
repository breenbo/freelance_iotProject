<template>
  <q-card
    class="col firmwareCard"
    flat
    bordered
  >
    <q-card-section>
      <div class="row text-h4 text-grey-7">
        <div class="col">
          {{ numberBinary }}
          <span class="text-h5 text-grey-6">
            firmware<span v-if="numberBinary > 1">s</span> uploaded
          </span>
        </div>
        <div class="col-auto text-grey-7">
          <q-chip
            class="text-h6 q-ma-none"
            outline
            color="green-14"
            icon="verified"
            :label="`v${firmwares[chosenProduct.id].default.version}`"
          />
        </div>
      </div>
    </q-card-section>
    <q-card-section>
      <!-- <versionList /> -->
      <!-- <versionTree /> -->
      <versionTable />
    </q-card-section>
    <!-- <q-card-section class="text-h4 text-grey-7 q-pl-lg q-mb-lg">
      {{ numberBinary }} <span class="text-h5 text-grey-6">binar<span v-if="numberBinary === 1">y</span><span v-else>ies</span> uploaded</span>
    </q-card-section> -->
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
// import versionList from './versionList.vue';
// import versionTree from './versionTree.vue';
import versionTable from './versionTable.vue';

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
  get chosenProduct() {
    return this.$store.state.Products.chosenProduct;
  }

  get firmwares() {
    return this.$store.state.Firmwares;
  }

  // calculate number of binaries : older array length + 1 (default firmware)
  get numberBinary() {
    return this.firmwares[this.chosenProduct.id].older.length + 1;
  }
}
</script>

<style lang="sass" scoped>
.firmwareCard
  border-left: solid 6px $teal-5
</style>