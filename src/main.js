/**
 * @Author: Your name
 * @Date:   2021-04-20 13:50:35
 * @Last Modified by:   Your name
 * @Last Modified time: 2021-04-22 15:34:24
 */
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import router from './route/router.js'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.config.productionTip = false

 let vm = new Vue({
  el: '#app',
  data:{},
  methods:{},
  router,
  render:c=> c(App)
})