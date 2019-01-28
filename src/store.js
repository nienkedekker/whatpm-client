import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import Cookie from 'js-cookie';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    status: '',
    token: Cookie.get('mevn-token') || '',
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading';
    },
    auth_success(state, token) {
      state.status = 'success';
      state.token = token;
    },
    auth_error(state) {
      state.status = 'error';
    },
    logout(state) {
      state.status = '';
      state.token = '';
    },
  },
  actions: {
    /**
     * Logs a user in. On success, it will add the JWT Token as a cookie ("mevn-token") to the user's browser
     * @param {function} commit - helper to trigger mutation
     * @param {object} loginPayload - the login object, including username and password
     */
    login({ commit }, loginPayload) {
      return new Promise((resolve, reject) => {
        commit('auth_request');
        axios.post(`${process.env.VUE_APP_API_BASE_URL}/authentication/login/`, loginPayload)
          .then((response) => {
            axios.defaults.headers.common.Authorization = `${response.data.token}`;
            Cookie.set('mevn-token', response.data.token);
            commit('auth_success', response.data.token);
            resolve(response);
          })
          .catch((error) => {
            commit('auth_error');
            reject(error);
          });
      });
    },

    /**
     * Register a new user. Rejects on invalid registration details.
     * @param {function} commit - helper to trigger mutation
     * @param {object} registerInfo - the register object, including username and password
     */
    register({ commit }, registerInfo) {
      return new Promise((resolve, reject) => {
        commit('auth_request');
        axios.post(`${process.env.VUE_APP_API_BASE_URL}/authentication/register/`, registerInfo)
          .then((response) => {
            if (response.data.success === true) {
              commit('auth_success', response.data.token);
              resolve(response);
            } else {
              reject(response);
            }
          })
          .catch((err) => {
            commit('auth_error', err);
            reject(err);
          });
      });
    },

    /**
     * Logs a user out, removes cookie and authorization header.
     * @param {function} commit - helper to trigger mutation
     */
    logout({ commit }) {
      return new Promise((resolve) => {
        commit('logout');
        Cookie.remove('mevn-token');
        resolve();
      });
    },
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
  },
});
