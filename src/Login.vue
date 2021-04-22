/**
 * @Author: Your name
 * @Date:   2021-04-22 09:55:52
 * @Last Modified by:   Your name
 * @Last Modified time: 2021-04-22 15:54:42
 */
<template>
        <div class="contanier">
            <div class="wrap-content">
              <div class="login">
                <router-link to="/sign">登录</router-link>
                <router-link to="/register">注册</router-link>
              </div>
            </div>
        </div>
</template>


<script>

    export default {
      name:'Login',
      components:{

      },
        data() {
            return {};
        },
        methods: {
        }
    }
</script>


<style lang="sass" scoped>
  .contanier {
    width: 100%;
    height: 100%;
    background-color: bisque;
    .wrap-content{
      width: 800px;
      height: 800px;
      border: 1px solid black;
      background-color:rgb(255,255,255)
    }
  }
</style>