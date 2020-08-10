<template>
  <div>
    <q-table
      class="text-grey-7"
      title="Versions"
      :data="versions"
      :columns="columns"
      row-key="name"
      flat
      hide-pagination
    >
      <template v-slot:body-cell="props">
        <q-td
          :props="props"
          :class="
            props.row.version === firmwares[chosenProduct.id].default.version
              ? 'bg-green-11 text-grey-8'
              : ''
          "
        >
          <span class="text-subtitle1">{{ props.value | niceNumber }}</span>
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  filters: {
    niceNumber(value: number): string {
      return value.toLocaleString('us');
    }
  }
})
export default class versionList extends Vue {
  columns = [
    {
      name: 'name',
      required: true,
      label: 'Version',
      align: 'center',
      field: 'version',
      format: val => `v${val}`,
      sortable: true,
      headerClasses: 'bg-grey-2'
    },
    {
      name: 'numberInUse',
      align: 'center',
      label: 'Devices in use',
      field: 'numberInUse',
      sortable: true,
      headerClasses: 'bg-grey-2'
    }
  ];
  get versions() {
    let versionsArray = [];
    // add the default firmware
    versionsArray[0] = this.firmwares[this.chosenProduct.id].default;
    // add all older firmwares in array
    this.firmwares[this.chosenProduct.id].older.forEach(element => {
      versionsArray.push(element);
    });
    // return array with all firmwares
    return versionsArray;
  }
  // computed datas from store
  get chosenProduct() {
    return this.$store.state.Products.chosenProduct;
  }

  get firmwares() {
    return this.$store.state.Firmwares;
  }
}
</script>
