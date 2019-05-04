import axios from 'axios';

export const statsActions = {
  // this should be 1 api call instead of 3 for each item
  fetchCountOfGivenItem(item) {
    return axios
      .get(`${process.env.VUE_APP_API_BASE_URL}/stats/count/${item}`)
      .then(response => response.data);
  },
  fetchCountOfGivenItemPerYear(item) {
    return axios
      .get(`${process.env.VUE_APP_API_BASE_URL}/stats/count/${item}`)
      .then(response => response.data);
  },
};
