<script>
import { Bar } from 'vue-chartjs';

export default {
  extends: Bar,
  data: () => ({
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            min: 0,
            precision: 0,
          },
          gridLines: {
            display: true,
          },
        }],
        xAxes: [{
          gridLines: {
            display: false,
          },
        }],
      },
      legend: {
        display: true,
      },
    },
  }),
  props: {
    chartdata: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};

</script>
