/**
 * @Author: Your name
 * @Date:   2021-04-22 10:59:45
 * @Last Modified by:   Your name
 * @Last Modified time: 2021-04-22 13:36:50
 */
<template>
          <div class="register">
            <el-input
            v-model="user"
            aria-placeholder="请输入用户名"></el-input>
            <el-input
            v-model="phone"
            aria-placeholder="请输入手机号"></el-input>
            <el-input
            v-model="passwordOne"
            aria-placeholder="请输入密码"></el-input>
            <el-input
            v-model="passwordTwo"
            aria-placeholder="请确认密码"></el-input>
            <el-button round :click="register">注册</el-button>
          </div>

</template>

<style>
</style>

<script>
    export default {
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

