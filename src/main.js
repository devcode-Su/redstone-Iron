// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'es6-promise/auto'
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import MDLite from 'material-design-lite'
import 'material-design-lite/material.min.css'

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(MDLite)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
