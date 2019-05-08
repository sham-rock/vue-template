// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
import { AlertPlugin, ToastPlugin } from 'vux'
import '../src/assets/js/rem.js';
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)

/* eslint-disable no-new */
const V = new Vue({
  el: '#app',
  router, 
  components: { App },
  template: '<App/>'
})

export default V