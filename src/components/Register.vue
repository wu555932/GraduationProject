/**
 * @Author: Your name
 * @Date:   2021-04-22 10:59:45
 * @Last Modified by:   Your name
 * @Last Modified time: 2021-04-23 14:00:25
 */
<template>
          <div class="register">
            <div class="wrap">
              <el-input
                v-model="user"
                placeholder="请输入用户名"
                class="input"></el-input>
              <el-input
                v-model="phone"
                placeholder="请输入手机号"
                class="input"></el-input>
              <el-input
                v-model="passwordOne"
                placeholder="请输入密码"
                class="input"></el-input>
              <el-input
                v-model="passwordTwo"
                placeholder="请确认密码"
                class="input"></el-input>
              <el-button round :click="register">注册</el-button>
            </div>

          </div>

</template>

<style lang="scss" scoped>
  .register {
    position: absolute;
    .wrap {
      position: relative;
      top: 20px;
      left: 150px;
      .input {
        width: 220px;
        display: block;
        margin-bottom: 20px;
      }
    }
  }
</style>

<script>
    export default {
        name:'Register',
        data() {
            return {
              user:'',
              phone:'',
              passwordOne:'',
              passwordTwo:''
            };
        },
        methods: {
          register() {
            if(this.passwordOne !== this.passwordTwo) {
              this.$message({
                showClose:true,
                message:'密码输入不一致，请重新输入！',
                type:'warning'
              })
            } else{
              this.message({
                showClose:true,
                message:'注册成功！',
                type:'success'
              })
            }
          }
        }
    }
</script>

