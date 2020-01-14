<template>
  <div>
    <pie-chart
      v-if="loaded"
      :chartdata="chartdata" />
  </div>
</template>

<script>
import PieChart from './types/PieChart.vue';
import { fetchAllTimeItems } from '../../../utils/statsActions';

export default {
  components: { PieChart },
  data: () => ({
    loaded: false,
    chartdata: null,
  }),
  async mounted() {
    this.loaded = false;
    try {
      await fetchAllTimeItems()
        .then((response) => {
          console.log(response);
          const { books, movies, shows } = response;
          this.chartdata = {
            labels: ['books', 'movies', 'shows'],
            datasets: [
              {
                data: [books, movies, shows],
                backgroundColor: ['#9656a1', '#ffc0ad', '#e78fb3'],
              },
            ],
          };
        })
        .catch((error) => {
          console.log(error);
        });
      this.loaded = true;
    } catch (e) {
      console.error(e);
    }
  },
};
</script>
