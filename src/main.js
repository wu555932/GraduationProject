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
import Vuex from 'vuex'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.config.productionTip = false
let seatinfo = Array.from({ length: 36 }).map((_, index) => ({
  type: "info",
  id: `${index + 1}`,
  effect: "dark",
  status:'free',
  label:`自习室${index+1}`
}))

localStorage.setItem('seatinfo',JSON.stringify(seatinfo))
// console.log(localStorage.getItem('seatinfo'));
const store = new Vuex.Store({
  state:{
    reserveinfo:{
      major:'',   //专业
      sid:'',     //学号
      name:'',    //姓名
      time:'',    //日期
      id:''       //座位编号
    },
  },
  mutations:{
    
    setmajor(state,major) {
      state.reserveinfo.major = major 
    },
    setsid(state,sid) {
      state.reserveinfo.sid = sid   
    },
    setname(state,name) {
      state.reserveinfo.name = name
    },
    settime(state,time) {
      state.reserveinfo.time = time
    },
    setid(state,id) {
      state.reserveinfo.id = id
    }
  },
  getters:{
    test(state){
      return state.reserveinfo.major
    },
    getmajor(state) {
      return state.reserveinfo.major
    },
    getsid(state) {
      return state.reserveinfo.sid
    },
    getname(state) {
      return state.reserveinfo.name
    },
    gettime(state) {
      return state.reserveinfo.time
    },
    getid(state) {
      return state.reserveinfo.id
    }
  }
})

 let vm = new Vue({     // eslint-disable-line no-unused-vars
  el: '#app',
  data:{},
  methods:{},
  router,
  store,
  render:c=> c(App)
})