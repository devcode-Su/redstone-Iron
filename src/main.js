// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import 'babel-polyfill';
import 'es6-promise/auto';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';
import materialIcons from 'material-design-icons-iconfont/dist/material-design-icons.css';

import 'vis/dist/vis.min.css';
//import 'vis/dist/vis-timeline-graph2d.min.css';

import router from './router';
import axios from 'axios';

import App from './App';

Vue.config.productionTip = false;

// axios
Vue.prototype.$http = axios;

// Fillters
Vue.filter('snippet', value => {
  return value.slice(0, 100) + '...';
});

// vue-Material
Vue.use(VueMaterial, materialIcons);
Vue.material.registerTheme({
  default: {
    primary: 'indigo',
    accent: 'red',
    warn: 'grey',
  },
  about: {
    primary: 'blue',
    accent: 'red',
    warn: 'grey',
  }
});
Vue.material.setCurrentTheme('default');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
