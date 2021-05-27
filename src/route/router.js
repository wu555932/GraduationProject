/**
 * @Author: Your name
 * @Date:   2021-04-20 19:06:27
 * @Last Modified by:   Your name
 * @Last Modified time: 2021-04-23 12:01:10
 */
'use strict';

import VueRouter from 'vue-router'
// import Home from '../home/home.vue'
import Home from "../home/home.vue"
import Login from '../Login.vue'
import Sign from '../components/Sign.vue'
import Register from '../components/Register.vue'
import User from "../components/User.vue"
import Reserve from "../components/Reserve.vue"
import Exit from "../components/Exit.vue"
import InfoModify from "../components/InfoModify.vue"
import ReserveModify from "../components/ReserveModify"
import Complaint from "../components/Complaint.vue"
import Seat from "../public/Seat.vue"
import Info from "../home/Info.vue"
import ManageInfo from "../home/ManageInfo.vue"
import Modify from "../home/Modify.vue"
import SeatInfo from "../home/SeatInfo.vue"
import SeatManage from "../home/SeatManage.vue"
import SeatModify from "../home/SeatModify.vue"




    const router = new VueRouter({
        routes:[
          {
            path:'/',
            redirect:'/login',
          },
          {
            path: '/login',
            redirect: '/login/sign',
            component:Login,
            children: [
              {
                path:'sign',
                name:'Sign',
                component:Sign
              },
              {
                path:'register',
                name:'Register',
                component:Register
              }
            ]
          },
          {
            path:'/home',
            name:'Home',
            component: Home,
            children:[
              {
                path:'info',      //通知与公告
                name:'Info',
                component:Info
              },
              {
                path:'manage',     //管理信息
                name:'ManageInfo',
                component:ManageInfo
              },
              {
                path:'modify',    //预约信息
                name:'Modify',
                component:Modify
              },
              {
                path:'seatinfo',  //座位信息
                name:'SeatInfo',
                component:SeatInfo
              },
              {
                path:'seatmanage',  //座位状态管理
                name:'seatmanage',
                component:SeatManage
              },
              {
                path:'seatmodify',  //座位状态管理
                name:'SeatModify',
                component:SeatModify
              }
            ]
          },
          {
            path:'/user',
            name:'User',
            component:User,
            children:[
              {
                path:'reserve',   //座位预约
                name:'Reserve',
                component:Reserve
              },
              { 
                path:'exit',    //退坐
                name:'Exit',
                component:Exit
              },
              {
                path:'infomodify',    //信息修改
                name:'InfoModigy',
                component:InfoModify
              },
              {
                path:'reservemodify',   //预约信息修改
                name:'ReserveModify',
                component:ReserveModify
              },
              {
                path:'complaint',       //投诉与建议
                name:'Complaint',
                component:Complaint
              },
              {
                path:'seat',
                name:'Seat',
                component:Seat
              }
             
            ]
          }


        ]
  })

  export default router

