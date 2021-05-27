<template>
    <div class="manageinfo">
        <h1>管理信息修改</h1>
    管理员：<el-input v-model="root" class="input" ></el-input>
    手机号码：<el-input v-model="phone" class="input" ></el-input>
    密码：<el-input v-model="password" class="input" ></el-input>
    <el-button type="primary" @click="change" class="btn">修改</el-button>
    </div>
</template>

<script>
export default {
    name:'ManageInfo',
    components:{

    },
    data() {
        return {
            root:'',
            phone:'',
            password:''
        }
    },
    methods:{
        showinfo() {
            let userinfo = JSON.parse(localStorage.getItem('userinfo'))
            this.root = userinfo.user
            this.password = userinfo.password
            this.phone = userinfo.phone
        },
        change() {
            this.$confirm('确认修改管理信息, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '修改成功!'
          });
          let   userinfo = JSON.parse(localStorage.getItem('userinfo'))
                userinfo.user = this.root
                userinfo.password = this.password
                userinfo.phone = this.phone
                localStorage.setItem('userinfo',JSON.stringify(userinfo))
            this.showinfo()
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
        }
    },
    created() {
        this.showinfo()
    }
}
</script>

<style lang="scss" scoped>
.manageinfo {
    position: relative;
    h1 {
        position: absolute;
        left: 40%;
        top:-30px
    }
    .input {
        width: 300px;
        display: block;
    }
    .btn {
        margin-top: 10px;
    }
}
</style>