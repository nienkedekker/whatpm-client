import axios from 'axios';

export const statsActions = {
  // get all items per year
  // http://localhost:3000/api/stats/count/2012/all
  fetchAllItemsByYear(year) {
    return axios
      .get(`${process.env.VUE_APP_API_BASE_URL}/stats/count/${year}/all`)
      .then(response => response.data);
  },
  //  * ex: host.com/api/stats/count/all
  fetchAllTimeItems() {
    return axios
      .get(`${process.env.VUE_APP_API_BASE_URL}/stats/count/all`)
      .then(response => response.data);
  },
};
