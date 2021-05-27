<template>
  <div class="wrap">
    专业<el-input v-model="major" class="input" :disabled="true"></el-input>
    学号<el-input v-model="sid" class="input" :disabled="true"></el-input>
    姓名<el-input v-model="name" class="input" :disabled="true"></el-input>
    预约时间<el-input v-model="time" class="input" :disabled="true"></el-input>
    终止时间<el-input v-model="time1" class="input" :disabled="true"></el-input>
    <el-button @click="exit" type="primary" class="btn">退座</el-button>
  </div>
</template>

<script>
import {format} from "../js/timestamp"
export default {
  name: "Exit",
  data() {
    return {
        major:'',
        sid:'',
        name:'',
        time:'',
        time1:''
    };
  },
  methods: {
      showInfo() {
          this.major = this.$store.getters.getmajor
          this.sid = this.$store.getters.getsid
          this.name = this.$store.getters.getname
          if(this.$store.getters.gettime[0]) {
              this.time = format(this.$store.getters.gettime[0])
          } else {
              this.time = ''
          }
          if(this.$store.getters.gettime[1]) {
              this.time1 = format(this.$store.getters.gettime[1])
          } else {
            this.time1 = ''
          }
            
           
      },
      exit() {
          this.$confirm('是否确认退座?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let   seatinfo = JSON.parse(localStorage.getItem('seatinfo'))
                seatinfo.find(item=>item.id===this.$store.getters.getid).effect = "dark"
                localStorage.setItem('seatinfo',JSON.stringify(seatinfo))
          this.$store.commit('setmajor','')
          this.$store.commit('setsid','')
          this.$store.commit('setname','')
          this.$store.commit('settime','')
          this.showInfo()
          this.$message({
            type: 'success',
            message: '退座成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
        
      }
    
  },
  created() {
      this.showInfo()
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  justify-content: space-between;
  .input {
    // margin-left: -10px;
    width: 250px;
    display: block;
  }
  .btn {
    margin-left: 100px;
  }
}
</style>