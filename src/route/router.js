/**
 * @Author: Your name
 * @Date:   2021-04-20 19:06:27
 * @Last Modified by:   Your name
 * @Last Modified time: 2021-04-22 15:40:00
 */
'use strict';

import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../Login.vue'
import Sign from '../components/Sign.vue'
import Register from '../components/Register.vue'



    const router = new VueRouter({
        routes:[
          {
            path:'/',
            redirect:'/login',
            component:Login
          },
          {
            path:'/home',
            name:'Home',
            component:Home
          },
          {
            path:'/login',
            name:'Login',
            component:Login
          },
          {
            path:'/sign',
            name:'Sign',
            component:Sign
          },
          {
            path:'/register',
            name:'Register',
            component:Register
          }
        ]
  })

  export default router
