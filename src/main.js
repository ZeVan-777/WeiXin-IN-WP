import Vue from 'vue'
import VueRouter from 'vue-router'
import VueBus from 'vue-bus'
import MuseUI from 'muse-ui'
import AlloyFinger from 'alloyfinger/alloy_finger';
import VueAlloyFinger from 'alloyfinger/vue/alloy_finger.vue'

import VueScroller from 'scroller'

import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-dark.css'

import App from './App.vue'


import routes from './config.router'


const router = new VueRouter({
	mode: 'hash',
	routes
})

Vue.use(VueRouter)
Vue.use(VueBus)
Vue.use(MuseUI)
Vue.use(VueAlloyFinger, {
	AlloyFinger
})

Vue.component('scroll', VueScroller);

new Vue({
	el: '#app',
  render: h => h(App),
  router
})
