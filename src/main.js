/**
 * @Author: Your name
 * @Date:   2021-04-20 13:50:35
 * @Last Modified by:   Your name
 * @Last Modified time: 2021-04-20 19:10:20
 */
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

let vm = new Vue({
  el: '#app',
  data:{},
  methods:{},
  render:c=> c(App)
})