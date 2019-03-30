import axios from 'axios';

export const search = {
  /**
   * Search all items by a given query
   * @function
   * @param {string} query - The given title
   */
  searchByQuery(query) {
    return axios
      .get(`${process.env.VUE_APP_API_BASE_URL}/search/${query}`)
      .then(response => response.data);
  },
};
