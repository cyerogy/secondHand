// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store/store'
import apisocket from './store/apisocket'
import 'mint-ui/lib/style.css'
import './assets/css/style.scss'
import 'lib-flexible'
import 'core-js'
import qs from 'qs'
Vue.prototype.axios = axios
Vue.prototype.store = store
Vue.prototype.apisocket = apisocket
if (process.env.NODE_ENV === 'development') {
    window.store = store
}
Vue.config.productionTip = false
Vue.config.debug = true
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
