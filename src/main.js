import Vue from 'vue'
import App from './App.vue'
import router from './router'

import global from './assets/css/global.css'
import './plugins/element.js'
Vue.config.productionTip = false

new Vue({
  router,
  global,
  render: h => h(App)
}).$mount('#app')
