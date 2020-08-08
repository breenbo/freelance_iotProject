<template>
  <div>
    This view will be a simple table-like view of all the devices that are associated with the active
    product. Each row should show the following for each device:
    <ul>
      <li>Device ID (most likely in the form of a MAC address)</li>
      <li>Firmware version</li>
      <li>Last check-in time</li>
      <li>Last update time</li>
    </ul>
    Above the table area should be a search/filter option along with a total of how many items are in
    the table.
    If no devices are associated with the product yet the view should just display a message like
    “Devices requesting firmware updates from this product will display here”
    Devices will auto-associate with the product as they hit the OTA service with the product specific
    URL. For the purpose of this exercise feel free to mock up devices with the attributes listed
    above.
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

<style lang="scss" scoped>
</style>