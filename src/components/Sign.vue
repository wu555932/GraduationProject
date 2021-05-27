/**
 * @Author: Your name
 * @Date:   2021-04-22 10:59:31
 * @Last Modified by:   Your name
 * @Last Modified time: 2021-04-23 14:25:28
 */
<template>
        <div class="sign">
          <div class="wrap">
            <el-input class="input"
              v-model="user"
              placeholder="请输入学号"
              size="mini"></el-input>
            <el-input class="input"
              v-model="password"
              placeholder="请输入密码"
              show-password
              size="mini"></el-input>
            <el-button @click="login">登录</el-button>
          </div>
        </div>
</template>



<script>
    export default {
      name:"Sign",
        data() {
            return {
              user:'',
              password:''
            };
        },
        methods: {
          login() {
            let user
            let password
            if(localStorage.getItem('userinfo')){
                   user = JSON.parse(localStorage.getItem('userinfo')).user
                   password = JSON.parse(localStorage.getItem('userinfo')).passwordOne
            } else {
                   user = ''
                   password = ''
            }
            
            

            if((this.user === user && this.password === password)||(this.user === 'admin' && this.password === '123456')){
              let userinfo = JSON.parse(localStorage.getItem('userinfo'))
                  userinfo.user = this.user
                  userinfo.password = this.password
                  localStorage.setItem('userinfo',JSON.stringify(userinfo))
              this.$router.push({path:'/user'})
            } else if(this.user === 'root' && this.password === '1234'){
               let userinfo = JSON.parse(localStorage.getItem('userinfo'))
                  userinfo.user = this.user
                  userinfo.password = this.password
                  localStorage.setItem('userinfo',JSON.stringify(userinfo))
              this.$router.push({path:'/home'})
            } else {
              this.$message({
                showClose:true,
                message:'账号和密码错误！',
                type:'error'
              })
            }
          }
        }
    }
</script>

<style lang="scss" scoped>
  .sign {
    position: absolute;
    .wrap {
      position: relative;
      top:100px;
      left: 150px;
    }
    .input {
      width: 220px;
      display: block;
      margin-bottom: 20px;
    }
  }
</style>