<template>
  <div>
    <q-table
      class="text-grey-7"
      title="Versions"
      :data="versions"
      :columns="columns"
      row-key="name"
      :hide-pagination="numberBinary < 6"
      flat
      :bordered="$q.screen.lt.sm"
      :grid="$q.screen.lt.sm"
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
import { products } from '../../store/products/state';
import { Firmware } from '../../store/firmwares/state';

@Component({
  filters: {
    niceNumber(value: number): string {
      return value.toLocaleString('us');
    },
  },
})
export default class versionList extends Vue {
  columns = [
    {
      name: 'name',
      required: true,
      label: 'Version',
      align: 'center',
      field: 'version',
      format: (val: string) => `v${val}`,
      sortable: true,
      headerClasses: 'bg-grey-2',
    },
    {
      name: 'numberInUse',
      align: 'center',
      label: 'Devices in use',
      field: 'numberInUse',
      sortable: true,
      headerClasses: 'bg-grey-2',
    },
  ];
  get versions(): Firmware[] {
    let versionsArray: Firmware[] = [];
    // add the default firmware
    versionsArray[0] = this.firmwares[this.chosenProduct.id].default;
    // add all older firmwares in array
    this.firmwares[this.chosenProduct.id].other.forEach((element: Firmware) => {
      versionsArray.push(element);
    });
    // sort array from newer to older
    versionsArray.sort((a, b) => b.version - a.version);
    // return array with all firmwares
    return versionsArray;
  }
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
