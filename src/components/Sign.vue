/**
 * @Author: Your name
 * @Date:   2021-04-22 10:59:31
 * @Last Modified by:   Your name
 * @Last Modified time: 2021-04-22 11:17:19
 */
<template>
        <div class="log">
          <el-input
          v-model="user"
          aria-placeholder="请输入学号">
          </el-input>
          <el-input
          aria-placeholder="请输入密码"
          show-password
          v-model="password"></el-input>
          <el-button round :click="login">登录</el-button>
        </div>
</template>

<style>
</style>

<script>
    export default {
        data() {
            return {
              user:'',
              password:''
            };
        },
        methods: {
          login() {
            if(this.user === 'admin' && this.password === '123456'){
              this.$route.push({path:'/home'})
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

