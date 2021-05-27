<template>
  <div class="reserveinfo">
    <h1>取消预约</h1>
    专业:<el-input v-model="major" :disabled="true" class="input"></el-input> 
    学号:<el-input v-model="sid"   :disabled="true" class="input"></el-input>
    姓名：<el-input v-model="name" :disabled="true" class="input"></el-input> 
    预约时间：<el-input v-model="start" :disabled="true" class="input1"></el-input>
    终止时间：<el-input v-model="end" :disabled="true" class="input1"></el-input>
    <el-button type="primary" @click="modify"  class="btn">取消预约</el-button>
  </div>
</template>

<script>
import {format} from "../js/timestamp"

export default {
  name: "ReserveModify",
  data() {
    return {
      major: "",
      sid: "",
      name: "",
      start: "",
      end:'',
      id:''
    };
  },
  methods: {
    showinfo() {
      this.major = this.$store.getters.getmajor
      this.sid = this.$store.getters.getsid
      this.name = this.$store.getters.getname
      // console.log(this.$store.getters.gettime[0]);
      if(this.$store.getters.gettime[0]){
        console.log('aaa');
        this.start = format(this.$store.getters.gettime[0])
      } else {
        console.log('aaaaaa');
        this.start =  ''
      }
      if(this.$store.getters.gettime[1]){
        this.end = format(this.$store.getters.gettime[1])
      } else {
        this.end =  ''
      }
      
      
      this.id = this.$store.getters.getid
      // console.log('format',format(this.start));
    },
    modify() {
      this.$confirm('是否取消预约?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '取消预约成功!'
          });
          let   seatinfo = JSON.parse(localStorage.getItem('seatinfo'))
                seatinfo.find(item=>item.id===this.id).effect = "dark"
                localStorage.setItem('seatinfo',JSON.stringify(seatinfo))
        this.$store.commit("setmajor", '');
        this.$store.commit("setsid", '');
        this.$store.commit("setname", '');
        this.$store.commit("settime", '');
        this.showinfo()
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消预约失败!'
          });          
        });
      
    },
  },
  created() {
    this.showinfo();
  },
};
</script>

<style lang="scss" scoped>
.reserveinfo {
    position: relative;
    h1 {
        position: absolute;
        top: -30px;
        left: 40%;
    }
    .input {
        width: 300px;
        display: block;
        
    }
    .input1 {
        display: inline-block;
        width: 300px;
    }
    .btn {
        display: block;
        margin: 10px;
    }
}
</style>