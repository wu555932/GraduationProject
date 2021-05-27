<template>
  <div class="userinfo">
    <h1>个人信息修改</h1>
    用户：<el-input v-model="user" class="input" ></el-input>
    手机号码：<el-input v-model="phone" class="input" ></el-input>
    密码：<el-input v-model="password" class="input" ></el-input>
    <el-button type="primary" @click="change">修改</el-button>
  </div>
</template>

<script>
export default {
  name: "InfoModify",
  data() {
    return {
        user:'',
        phone:'',
        password:''
    };
  },
  methods: {
      showinfo() {
          let userinfo = JSON.parse(localStorage.getItem('userinfo'))
          console.log(userinfo);
          this.user = userinfo.user
          this.phone = userinfo.phone
          this.password = userinfo.password
      },
      change() {
          let userinfo = JSON.parse(localStorage.getItem('userinfo'))
              userinfo.user = this.user
              userinfo.phone = this.phone
              userinfo.password = this.password
              localStorage.setItem('userinfo',JSON.stringify(userinfo))
              this.$message({
                  type:'success',
                  message:'信息修改成！'
              })
              this.$router.push('/login/sign')
      }
  },
  created() {
      this.showinfo()
  }
};
</script>

<style lang="scss" scoped>
</style>