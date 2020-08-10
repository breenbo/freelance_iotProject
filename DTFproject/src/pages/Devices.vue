<template>
  <div>
    <q-card class="q-ma-xl" v-if="details">
      <q-card-section>
        <div class="text-h4 text-grey-7">
          {{ details.length }} device<span v-if="details.length > 1">s</span>
        </div>
        <div class="text-subtitle2 text-grey-6">
          associated with {{ chosenProduct.name }}
        </div>
      </q-card-section>
      <q-card-section>
        <q-table
          title=""
          :data="details"
          :columns="columns"
          row-key="name"
          flat
          hide-pagination
        />
      </q-card-section>
    </q-card>

    <q-card class="q-ma-xl" v-else>
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>
      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </q-card-section>
    </q-card>

    This view will be a simple table-like view of all the devices that are
    associated with the active product. Each row should show the following for
    each device:
    <ul>
      <li>Device ID (most likely in the form of a MAC address)</li>
      <li>Firmware version</li>
      <li>Last check-in time</li>
      <li>Last update time</li>
    </ul>
    Above the table area should be a search/filter option along with a total of
    how many items are in the table. If no devices are associated with the
    product yet the view should just display a message like “Devices requesting
    firmware updates from this product will display here” Devices will
    auto-associate with the product as they hit the OTA service with the product
    specific URL. For the purpose of this exercise feel free to mock up devices
    with the attributes listed above.
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Devices extends Vue {
  columns = [
    {
      name: 'name',
      required: true,
      label: 'Name',
      align: 'left',
      field: 'name',
      sortable: true,
      headerClasses: 'bg-grey-2'
    },
    {
      name: 'id',
      required: true,
      label: 'ID',
      align: 'center',
      field: 'macAdress',
      // format: val => `${val}`,
      sortable: true,
      headerClasses: 'bg-grey-2'
    },
    {
      name: 'firmware',
      align: 'center',
      label: 'Firmware version',
      field: 'firmware',
      sortable: true,
      headerClasses: 'bg-grey-2'
    },
    {
      name: 'lastCheck',
      align: 'center',
      label: 'Last Check-in',
      field: 'lastCheck',
      sortable: true,
      headerClasses: 'bg-grey-2'
    },
    {
      name: 'lastUpdate',
      align: 'center',
      label: 'Last update',
      field: 'lastUpdate',
      sortable: true,
      headerClasses: 'bg-grey-2'
    }
  ];
  get chosenProduct() {
    return this.$store.state.Products.chosenProduct;
  }
  get details() {
    return this.$store.state.Devices[this.chosenProduct.id];
  }
}
</script>

<style lang="sass" scoped></style>
