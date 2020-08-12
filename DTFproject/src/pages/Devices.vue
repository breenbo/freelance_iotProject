<template>
  <q-page class="pageContainer">
    <!-- page title -->
    <div
      class="text-h4 text-grey-6 q-pt-xl"
      v-if="details"
    >
      Devices <span v-if="$q.screen.gt.xs"> associated with </span><span v-else> for </span>{{ chosenProduct.name }}
    </div>
    <q-card
      class="q-mt-xl borderColor"
      v-if="details"
      bordered
    >
      <q-card-section class="row">
        <!-- card title -->
        <div class="col-12 col-sm">

          <div class="text-h4 text-grey-7">
            {{ details.length }} <span class="text-h5 text-grey-6">device<span v-if="details.length > 1">s</span></span>
          </div>
        </div>
        <!-- search input -->
        <div class="col-12 col-sm">
          <q-input
            v-model="filter"
            placeholder="Search"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
      </q-card-section>
      <!-- devices table -->
      <q-card-section>
        <q-table
          title=""
          :data="details"
          :columns="columns"
          row-key="name"
          flat
          hide-pagination
          :filter="filter"
          :bordered="$q.screen.lt.md"
          :grid="$q.screen.lt.md"
        >
        </q-table>
      </q-card-section>
    </q-card>

    <!-- svg and text if no device attached to product -->
    <div
      class="windowHeight column justify-center"
      v-if="!details && chosenProduct"
    >
      <div
        class="text-weight-light text-grey-7 q-mb-xl"
        :class="$q.screen.gt.xs ? $q.screen.gt.md ? 'text-h3' : 'text-h4':'text-h5'"
      >
        Devices requesting firmware updates from this product will display here
      </div>
      <div class="svgContainer">
        <noDevice />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
// import chooseProduct from '../components/chooseProduct.vue';
import noDevice from '../components/svg/noDevice.vue';

@Component({
  components: { noDevice },
})
export default class Devices extends Vue {
  filter = '';
  columns = [
    {
      name: 'name',
      required: true,
      label: 'Name',
      align: 'left',
      field: 'name',
      sortable: true,
      headerClasses: 'bg-grey-2',
    },
    {
      name: 'id',
      required: true,
      label: 'ID',
      align: 'center',
      field: 'macAdress',
      // format: val => `${val}`,
      sortable: true,
      headerClasses: 'bg-grey-2',
    },
    {
      name: 'firmware',
      align: 'center',
      label: 'Firmware version',
      field: 'firmware',
      sortable: true,
      headerClasses: 'bg-grey-2',
    },
    {
      name: 'lastCheck',
      align: 'center',
      label: 'Last Check-in',
      field: 'lastCheck',
      sortable: true,
      headerClasses: 'bg-grey-2',
    },
    {
      name: 'lastUpdate',
      align: 'center',
      label: 'Last update',
      field: 'lastUpdate',
      sortable: true,
      headerClasses: 'bg-grey-2',
    },
  ];
  get chosenProduct() {
    return this.$store.state.Products.chosenProduct;
  }
  get details() {
    return this.$store.state.Devices[this.chosenProduct.id];
  }
}
</script>

<style lang="sass" scoped>
.pageContainer
  max-width: 1400px!important

.borderColor
  border-left: solid 6px $secondary

.windowHeight
  height: 80vh!important

.svgContainer
  margin: 0 auto
  max-width: 800px
  width: 100%
  // width: 50%
</style>
