import axios from 'axios';
import Cookie from 'js-cookie';

export const actions = {
  /**
   * Deprecated, use fetchAllItemsByYear
   * Fetch all items given a certain item type, and return them
   * @function
   * @param {string} type - The item type. Can be book, movie or show.
   */
  fetchAllItems(type) {
    return axios
      .get(`${process.env.VUE_APP_API_BASE_URL}/${type}`)
      .then(response => response.data);
  },

  /**
   * ex: host.com/api/years/year/2017
   * Fetch _all_ items given a certain year, and return them
   * Similar to `fetchAllItemsByTypeAndYear` but only takes 1 API call instead of 3
   * @function
   * @param {string} year - The given year
   */
  fetchAllItemsByYear(year) {
    return axios
      .get(`${process.env.VUE_APP_API_BASE_URL}/years/year/${year}`)
      .then(response => response.data);
  },

  /**
   * Fetch all items given a certain type and year, and return them
   * @function
   * @param {string} type - The item type
   * @param {string} year - The given year
   */
  fetchAllItemsByTypeAndYear(type, year) {
    return axios
      .get(`${process.env.VUE_APP_API_BASE_URL}/${type}/year/${year}`)
      .then(response => response.data);
  },

  /**
   * Fetch item given its type and id
   * @function
   * @param {string} type - The item type. Can be book, movie or show.
   * @param {string} id - The id of the item, passed through $this.route.params.id
   */
  fetchSingleItemById(type, id) {
    return axios
      .get(`${process.env.VUE_APP_API_BASE_URL}/${type}/${id}`)
      .then(response => response.data);
  },

  /**
   * Create a new item
   * @function
   * @param {string} type - The item type. Can be book, movie or show.
   * @param {object} obj - The newly created item object
   * @param {object} router - Vue router (or a mock)
   */
  createItem(type, obj, router) {
    return axios
      .post(`${process.env.VUE_APP_API_BASE_URL}/${type}/`, obj, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${Cookie.get('mevn-token')}`,
        },
      })
      .then(() => router.push({ name: 'Year', params: { year: obj.belongs_to_year } }));
  },

  /**
   * Update an existing item
   * @function
   * @param {string} type - The item type. Can be book, movie or show.
   * @param {string} id - The id of the item, passed through $this.route.params.id
   * @param {object} obj - The existing item object
   * @param {object} router - Vue router (or a mock)
   */
  updateItem(type, id, obj, router) {
    // axios.defaults.withCredentials = true;
    return axios
      .put(`${process.env.VUE_APP_API_BASE_URL}/${type}/${id}`, obj, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${Cookie.get('mevn-token')}`,
        },
      })
      .then(() => router.push({ name: 'Year', params: { year: obj.belongs_to_year } }));
  },

  /**
   * Delete item given its type and id
   * @function
   * @param {string} type - The item type. Can be book, movie or show.
   * @param {string} id - The id of the item, passed through $this.route.params.id
   * @param {string} router - Vue router (or a mock)
   */
  deleteItem(type, id, router) {
    return axios
      .delete(`${process.env.VUE_APP_API_BASE_URL}/${type}/${id}`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${Cookie.get('mevn-token')}`,
        },
      })
      .then(() => router.go());
  },
};
