<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { HorizontalBar, mixins } from 'vue-chartjs';
const { reactiveProp } = mixins;

@Component({
  extends: HorizontalBar,
  mixins: [reactiveProp],
  props: {
    options: {
      type: Object,
      default: null
    }
  }
})
export default class barChart extends Vue {
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
