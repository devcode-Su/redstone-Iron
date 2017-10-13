// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import 'es6-promise/auto'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

// axios
Vue.prototype.$http = axios

// Fillters
Vue.filter('snippet', value => {
  return value.slice(0, 100) + '...'
});

// vue-Material
Vue.use(VueMaterial);
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
