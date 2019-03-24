import axios from 'axios';

export const search = {
  /**
   * Search all items by title given a query
   * @function
   * @param {string} query - The given title
   */
  searchByTitle(query) {
    return axios
      .get(`${process.env.VUE_APP_API_BASE_URL}/search/${query}`)
      .then(response => response.data);
  },
};
