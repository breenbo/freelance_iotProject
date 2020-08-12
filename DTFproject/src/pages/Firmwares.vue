<template>
  <q-page class="pageContainer">
    <!-- button to upload a firmware -->
    <q-btn
      color="primary"
      icon="backup"
      label="Upload a firmware"
      class="full-width q-ma-xl q-py-sm"
      size="xl"
      rounded
      outline
      @click="upload = true"
    />
    <!-- modal to upload firmware -->
    <q-dialog v-model="upload">
      <q-card class="q-pt-lg q-px-md q-pb-sm">
        <q-card-section class="row items-center">
          <q-avatar icon="backup" color="secondary" text-color="white" />
          <span class="q-ml-sm text-h5 text-grey-7"
            >Please choose a firmware to upload</span
          >
        </q-card-section>
        <!-- upload file -->
        <q-card-section class="q-px-xl">
          <q-file
            v-model="uploadData.fileToUpload"
            counter
            clearable
            label="File upload"
          >
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
          <!-- enter version number -->
          <q-input
            v-if="uploadData.fileToUpload"
            v-model="uploadData.versionNumber"
            clearable
            required
            type="text"
            label="Version number"
            placeholder="please enter a version number"
          >
            <template v-slot:prepend>
              <q-icon name="device_unknown" />
            </template>
          </q-input>
          <!-- make it default or not -->
          <div v-if="uploadData.versionNumber" class="row items-center q-mt-lg">
            <q-icon name="verified" size="sm" color="grey-7" class="q-mr-sm" />
            <q-checkbox
              class="text-subtitle1 text-grey-8"
              left-label
              v-model="uploadData.default"
              label="Default firmware"
            />
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <!-- upload only if fields filled -->
          <q-btn
            flat
            label="upload"
            color="primary"
            :disable="uploadData.versionNumber ? false : true"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- part if firmwares exists -->
    <div v-if="chosenFirmwares" class="full-width">
      <!-- title of the page  -->
      <div class="q-my-lg text-h4 text-grey-7 full-width">
        Firmwares for {{ chosenProduct.name }}
      </div>
      <div class="q-my-sm text-h5 full-width text-grey-7">
        Active firmware<span v-if="usedFirmware.length > 1">s</span>
      </div>
      <!-- cards for firmwares with numberInUse > 0 -->
      <div
        class="row justify-around full-width"
        :class="$q.screen.gt.xs ? 'q-col-gutter-md' : 'q-col-gutter-y-md'"
      >
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 cursor-pointer"
          v-for="firmware in usedFirmware"
          :key="firmware.id"
          @click="setModal(firmware)"
        >
          <q-card
            :class="firmware.default ? 'borderColor' : ''"
            class="hoverShadow"
          >
            <q-card-section class="row items-center">
              <div class="col text-grey-8">
                <div class="text-h6">
                  <span class="text-grey-6">Firmware</span> v{{
                    firmware.version
                  }}
                </div>
                <div class="text-subtitle2">
                  {{ firmware.numberInUse.toLocaleString('us') }}
                  <span class="text-grey-6"
                    >device<span v-if="firmware.numberInUse > 1">s</span> in
                    use</span
                  >
                </div>
              </div>
              <div class="col-auto justify-end" v-if="firmware.default">
                <q-icon name="check" size="lg" color="positive" />
              </div>
            </q-card-section>
            <q-card-section>
              <div class="ellipsis">
                {{ firmware.releaseNote }}
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <!-- table for unused firmware: numberInUse = 0 -->
      <div v-if="unusedFirmwares.length !== 0" class="q-mb-lg full-width">
        <div class="q-mb-sm q-mt-xl text-h5 full-width text-grey-7">
          Inactive firmware<span v-if="unusedFirmwares.length > 1">s</span>
        </div>
        <q-table
          flat
          title=""
          :data="unusedFirmwares"
          :columns="columns"
          row-key="name"
          @row-click="onRowClick"
          :hide-pagination="unusedFirmwares.length < 6"
          :bordered="$q.screen.lt.sm"
          :grid="$q.screen.lt.sm"
        >
          <q-td
            class="releaseCol"
            slot="body-cell-releaseNote"
            slot-scope="props"
            :props="props"
          >
            {{ props.value }}
          </q-td>
        </q-table>
      </div>
    </div>

    <!-- no firmware available, ask for one -->
    <div v-else class="row justify-center items-center full-width">
      <div
        class="col-12 col-md-5 cursor-pointer q-mb-xl"
        @click="upload = true"
      >
        <sendFile />
      </div>
      <div
        class="col-12 col-md text-weight-light text-grey-7 text-center"
        :class="$q.screen.gt.xs ? 'text-h3' : 'text-h5'"
      >
        Please upload a firmware
      </div>
    </div>
    <!-- </div> -->

    <!-- modal to display detailed firmware view -->
    <q-dialog v-model="openModal">
      <!-- fill card only if modalFirmware not empty -->
      <q-card v-if="Object.entries(modalFirmware).length !== 0" class="q-px-sm">
        <q-card-section class="row items-center">
          <div class="col text-grey-8">
            <div class="text-h6">
              <span class="text-grey-6">Firmware</span> v{{
                modalFirmware.version
              }}
            </div>
            <div class="text-subtitle2" v-if="modalFirmware.numberInUse > 0">
              {{ modalFirmware.numberInUse.toLocaleString('us') }}
              <span class="text-grey-6"
                >device<span v-if="modalFirmware.numberInUse > 1">s</span> in
                use</span
              >
            </div>
            <div class="text-subtitle2">
              <span class="text-grey-6">Created at: </span
              >{{ modalFirmware.createdAt }}
            </div>
            <div class="text-subtitle2">
              {{ modalFirmware.size.toLocaleString('us')
              }}<span class="text-grey-6"> kb</span>
            </div>
          </div>
          <div class="col-auto justify-end" v-if="modalFirmware.signed">
            <q-icon name="verified" size="xl" color="positive" />
          </div>
        </q-card-section>
        <q-card-section>
          <div class="text-subtitle1 text-grey-6">Release notes:</div>
          <div>
            {{ modalFirmware.releaseNote }}
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="close" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import { products } from '../store/products/state';
import { Firmware, FirmwareObject } from '../store/firmwares/state';
import sendFile from '../components/svg/sendFile.vue';

@Component({
  components: { sendFile }
})
export default class Firmwares extends Vue {
  // detailed firmware dialog
  openModal = false;
  modalFirmware = {} as Firmware;
  // upload dialog
  upload = false;
  uploadData = {
    fileToUpload: null,
    versionNumber: '',
    default: false
  };

  // columns for qtable
  columns = [
    {
      name: 'name',
      required: true,
      label: 'Version',
      align: 'left',
      field: 'version',
      format: (val: string) => `v${val}`,
      sortable: true,
      headerClasses: 'bg-grey-2'
    },
    {
      name: 'releaseNote',
      align: 'left',
      label: 'Release Note',
      field: 'releaseNote',
      headerClasses: 'bg-grey-2'
    },
    {
      name: 'createdAt',
      align: 'center',
      label: 'Created',
      field: 'createdAt',
      sortable: true,
      headerClasses: 'bg-grey-2'
    }
  ];

  get chosenProduct(): products {
    return this.$store.state.Products.chosenProduct as products;
  }
  get chosenFirmwares(): FirmwareObject {
    return this.$store.state.Firmwares[this.chosenProduct.id] as FirmwareObject;
  }
  get firmwaresArray(): Firmware[] {
    let versionsArray = [] as Firmware[];
    // add the default firmware
    versionsArray[0] = this.chosenFirmwares.default;
    // add all older firmwares in array
    this.chosenFirmwares.other.forEach((element: Firmware) => {
      versionsArray.push(element);
    });
    // return array with all firmwares
    return versionsArray;
  }

  // computed properties and watcher on chosenProduct to divide firmwares in used and unused (numberInUse != 0)
  get usedFirmware(): Firmware[] {
    let array: Firmware[] = [];
    // store elements in array
    this.firmwaresArray.forEach(el => {
      el.numberInUse !== 0 ? array.push(el) : '';
    });
    // sort array from newer to older
    array.sort((a, b) => b.version - a.version);
    return array;
  }

  get unusedFirmwares(): Firmware[] {
    let array: Firmware[] = [];
    // store elements in array
    this.firmwaresArray.forEach(el => {
      el.numberInUse === 0 ? array.push(el) : '';
    });
    // sort array from newer to older
    array.sort((a, b) => b.version - a.version);
    return array;
  }

  // method to set value in modal
  setModal(firmware: Firmware) {
    this.modalFirmware = firmware;
    this.openModal = true;
  }

  // show firmware modal on row click
  onRowClick(evt: Event, row: Firmware) {
    this.setModal(row);
  }

  @Watch('chosenProduct.name')
  ifChanges() {
    this.usedFirmware;
    this.unusedFirmwares;
  }
}
</script>

<style lang="sass" scoped>
.pageContainer
  max-width: 1400px!important

.windowHeight
  height: 88vh!important

.borderColor
  border-left: solid 6px $positive

.hoverShadow:hover
  box-shadow: $shadow-10

.releaseCol
  width: 100%
  white-space: normal
</style>
