<template>
  <q-card class="col timeCard">
    <q-card-section>
      <div class="text-h6 text-grey-7">Checked devices</div>
    </q-card-section>
    <q-card-section>
      <div class="chartContainer">
        <barChart
          :chart-data="dataChecked"
          :options="options"
        />
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import barChart from './barChart.vue';
import { products } from '../../store/products/state';

@Component({
  components: { barChart },
})
export default class TimeCard extends Vue {
  chartData = null;
  options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: { display: false },
    scales: {
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            callback: function (value: number) {
              // check if value is integer, and display only integer values
              const newValue = Number.isInteger(value) ? value : '';
              return newValue.toLocaleString('us');
            },
          },
        },
      ],
    },
  };

  // get the datas from the store, depending on the chosenProduct
  get chosenProduct(): products {
    return this.$store.state.Products.chosenProduct;
  }

  get dataChecked() {
    // in: object from store
    // out : array to work with chartjs
    let datas: number[] = [];
    if (this.chosenProduct) {
      Object.keys(this.chosenProduct.lastChecked).forEach((el) => {
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
            'hsla(171,64%,42%,0.2)',
          ],
          hoverBackgroundColor: [
            'hsla(291,64%,42%,0.5)',
            'hsla(231,64%,42%,0.5)',
            'hsla(171,64%,42%,0.5)',
          ],
          barThickness: 'flex',
          data: datas,
        },
      ],
    };
    return chartData;
  }
}
</script>

<style lang="sass" scoped>
.chartContainer
  position: relative
  height: 100%

.timeCard
  border-left: solid 6px $secondary
</style>
