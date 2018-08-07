import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import router from './router'

import  "vuetify/src/stylus/main.styl"
Vue.use(Vuetify)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})