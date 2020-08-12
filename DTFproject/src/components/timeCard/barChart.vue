<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator';
// import mixins for responsive behaviour on data changes
import { HorizontalBar, mixins } from 'vue-chartjs';
const { reactiveProp } = mixins;

@Component
export default class barChart extends Mixins(HorizontalBar, reactiveProp) {
  @Prop({ type: Object, default: null }) readonly options!: Record<
    string,
    unknown
  >;
  // render chart when component mounted
  mounted() {
    this.renderChart(this.chartData, this.options);
  }
}
</script>

<style lang="sass">
// set height of the chart
canvas
    height: 300px!important
</style>
