import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'

import routes from './config.router'

const router = new VueRouter({
	mode: 'hash',
	routes
})

Vue.use(VueRouter)

new Vue({
	el: '#app',
  render: h => h(App),
  router
})
