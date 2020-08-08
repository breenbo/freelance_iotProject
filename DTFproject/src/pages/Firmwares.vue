<template>
  <div>
    <div>
      Firmwares view :<br />
      The firmware view will be a list of firmware binaries that have been uploaded for the active
      product. The list will be displayed in two ways. All firmware binaries that are actively running on
      devices will be cards. The firmware cards will be sorted left to right based on the number of
      devices running that version of firmware. Each card will display the following information in order
      of visual importance:
      <ul>
        <li>Visual indicator if it is the default firmware for the active product</li>
        <li> Version</li>
        <li>Number of devices running this version</li>
        <li>Release notes (should truncate to not make the card to long but have an option to open the firmware in it’s own dedicated view to see all of the release notes) </li>
      </ul>
      All other firmwares that do not have active devices running them should be in a table view below
      the active firmware cards. They should be sorted by version (semver) newest to oldest. Clicking
      on a firmware card or firmware in the table should open the Single Firmware View.
      The most important feature on this view is the ability to upload a new firmware. This should be a
      very obvious call to action mechanism that is easy to find. Clicking on it will open a file upload
      dialog. The other option would be to drag and drop the firmware onto the page to initiate an
      upload. Either method should also prompt the user to enter a version for the firmware and a
      checkbox to indicate whether or not it should be the default firmware for the product.
      If no firmware binaries have been uploaded for the product the Firmware Overview View should
      display a message prompting the user to upload a binary.
    </div>
    <div class="q-mt-xl">
      Firmware view: <br />
      This is a view of a single firmware. It should show the following information:
      <ul>
        <li>Version</li>
        <li>Number of devices running this version</li>
        <li>Indicator if it is signed or not (perhaps just an icon indicator)</li>
        <li>Size in KB</li>
        <li>Full release notes</li>
        <li>Created date</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

<style lang="scss" scoped>
</style>