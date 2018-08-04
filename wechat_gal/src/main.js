// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import axios from 'axios'
import App from './App'
import router from './router'

import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded; charset=UTF-8"
axios.defaults.baseURL = "http://127.0.0.1:8888"
Vue.prototype.$axios = axios


/* eslint-disable no-new */

Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
