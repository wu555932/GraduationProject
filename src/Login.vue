/**
 * @Author: Your name
 * @Date:   2021-04-22 09:55:52
 * @Last Modified by:   Your name
 * @Last Modified time: 2021-04-23 11:58:42
 */
<template>
        <div class="contanier">
          <h1 class="title">座位预约管理系统1.0</h1>
            <div class="wrap-content">
              <div class="login">
                <router-link to="/login/sign" class="sign">登录</router-link>
                <router-link to="/login/register" class="register">注册</router-link>
                <router-view ></router-view>
              </div>
            </div>
        </div>

</template>


<script>
    export default {
      name:'Login',
        data() {
            return {};
        },
        methods: {
        }
    }
</script>


<style lang="scss" scoped>
  .contanier {
    width: 100%;
    height: 100%;
    background: url(../img/bj3.jpeg) no-repeat;
    background-size:cover;
    position: absolute;
    .title {
      position: relative;
      top: 10%;
      left: 41%;
      color: #eee;
    }
    .wrap-content {
        position: relative;
        width: 500px;
        height: 500px;
        border: 1px solid #eee;
        top: 50%;
        left: 50%;
        margin-left: -250px;
        margin-top: -250px;
        // background-color: rgb(255,255,255);
      .login {
        text-align: center;
        font-size: 24px;
        font-weight: bold;

        .sign {
          color:#eee;
          text-decoration: none;
        }
        .register {
          color:#eee;
          text-decoration: none;
        }
      }

    }
  }
</style>