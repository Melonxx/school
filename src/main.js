// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/global.css'
import index from './assets/index.js'

Vue.prototype.$index = index

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

// require('swiper/dist/css/swiper.css')
// require('./assets/global.css')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
