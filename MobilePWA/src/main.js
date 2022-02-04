import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import BootstrapVue from 'bootstrap-vue'
import Snotify from 'vue-snotify'
import 'vue-snotify/styles/material.css';
import VueRouter from 'vue-router'


Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(Snotify)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
