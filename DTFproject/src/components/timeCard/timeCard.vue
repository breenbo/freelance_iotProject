<template>
  <q-card class="col timeCard" flat bordered>
    <q-card-section>
      <div class="text-h6 text-grey-7">Checked devices</div>
    </q-card-section>
    <!-- <q-separator inset /> -->
    <q-card-section>
      <div class="chartContainer">
        <barChart :chart-data="dataChecked" :options="options" />
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import barChart from './barChart.vue';

@Component({
  components: { barChart }
})
export default class TimeCard extends Vue {
  chartData = null;
  options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: { display: false }
  };

  // get the datas from the store, depending on the chosenProduct
  get chosenProduct() {
    return this.$store.state.Products.chosenProduct;
  }

  get dataChecked() {
    // in: object from store
    // out : array to work with chartjs
    let datas = [];
    if (this.chosenProduct) {
      Object.keys(this.chosenProduct.lastChecked).forEach(el => {
        datas.push(this.chosenProduct.lastChecked[el]);
      });
    }
    let chartData = {
      labels: ['last day', 'last week', 'last month'],
      datasets: [
        {
          label: 'Checked devices',
          backgroundColor: [
            'hsla(291,64%,42%,0.2)',
            'hsla(231,64%,42%,0.2)',
            'hsla(171,64%,42%,0.2)'
          ],
          hoverBackgroundColor: [
            'hsla(291,64%,42%,0.5)',
            'hsla(231,64%,42%,0.5)',
            'hsla(171,64%,42%,0.5)'
          ],
          barThickness: 'flex',
          data: datas
        }
      ]
    };
    return chartData;
  }
}
</script>

<style lang="sass" scoped>
.chartContainer
  position: relative
  height: 100%
</style>
