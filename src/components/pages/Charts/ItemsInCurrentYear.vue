<template>
  <div class="container">
    <bar-chart
      v-if="loaded"
      :chartdata="chartdata"
      :options="options"/>
  </div>
</template>

<script>
import BarChart from './BarChart.vue';
import { fetchAllItemsByYear } from '../../../utils/statsActions';
import { getCurrentYear } from '../../../utils/helpers';

export default {
  components: { BarChart },
  data: () => ({
    loaded: false,
    books: null,
    movies: null,
    tvshows: null,
    chartdata: null,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
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
  async mounted() {
    this.loaded = false;
    try {
      await fetchAllItemsByYear(getCurrentYear())
        .then((response) => {
          const { books, movies, shows } = response;
          this.chartdata = {
            labels: ['2020'],
            datasets: [
              {
                label: 'books',
                backgroundColor: '#f87979',
                data: [books],
              },
              {
                label: 'movies',
                backgroundColor: '#5bf8bf',
                data: [movies],
              },
              {
                label: 'tvshows',
                backgroundColor: '#f87979',
                data: [shows],
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
