/* eslint-disable import/no-unresolved */
import Vue from 'vue';
import Router from 'vue-router';

import Index from './components/pages/Index.vue';
import Year from './components/pages/Year.vue';

import About from './components/pages/About.vue';
import Search from './components/pages/Search.vue';

import AddItem from './components/actions/add/AddItem.vue';
import EditBook from './components/actions/edit/EditBook.vue';
import EditMovie from './components/actions/edit/EditMovie.vue';
import EditShow from './components/actions/edit/EditShow.vue';

import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/add-item',
      name: 'AddItem',
      component: AddItem,
    },
    {
      path: '/edit-book/:id',
      name: 'EditBook',
      component: EditBook,
    },
    {
      path: '/edit-movie/:id',
      name: 'EditMovie',
      component: EditMovie,
    },
    {
      path: '/edit-show/:id',
      name: 'EditShow',
      component: EditShow,
    },
    {
      path: '/year/:year',
      name: 'Year',
      component: Year,
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
    },
    {
      path: '/stats',
      name: 'Stats',
      component: () => import(/* webpackChunkName: "stats" */ './components/pages/Stats.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register-user',
      name: 'Register',
      component: Register,
    },
  ],
});
