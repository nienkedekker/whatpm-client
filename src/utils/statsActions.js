import axios from 'axios';

/**
 * ex: host.com/api/stats/count/2012/all
 * Fetch _all_ items given a certain year, and return them
 * @function
 * @param {number} year - The given year
 */
export function fetchAllItemsByYear(year) {
  return axios
    .get(`${process.env.VUE_APP_API_BASE_URL}/stats/count/${year}/all`)
    .then(response => response.data);
}

/**
 * ex: host.com/api/stats/count/all
 * Fetch _all_ items ever
 * @function
 */
export function fetchAllTimeItems() {
  return axios
    .get(`${process.env.VUE_APP_API_BASE_URL}/stats/count/all`)
    .then(response => response.data);
}
