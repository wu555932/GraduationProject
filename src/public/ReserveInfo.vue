<template>
  <div class="reserve-info">
    <el-input v-model="major" placeholder="专业" class="input"></el-input>
    <el-input v-model="sid" placeholder="学号" class="input"></el-input>
    <el-input v-model="name" placeholder="姓名" class="input"></el-input>
    <div class="block">
      <span class="demonstration">选择预约时间</span>
      <el-date-picker
        v-model="time"
        type="datetimerange"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :default-time="['12:00:00']"
      >
      </el-date-picker>
    </div>
  </div>

</template>

<script>
export default {
  name: "ReserveInfo",
  data() {
    return {
      major: "",
      sid: "",
      name: "",
      time:'',
    };
  },
  methods: {},
  mounted() {
    
  },
  // computed: {
  //   major: {
  //     get() {
  //       // console.log(this.$store);

  //       return this.globalstore.getters.getmajor;
  //     },
  //     set(newValue) {
  //       this.$store.commit("setreserve", newValue);
  //     },
  //   },
  //   sid: {
  //     get() {
  //       return this.globalstore.getters.getsid;
  //     },
  //     set(newValue) {
  //       this.$store.commit("setsid", newValue);
  //     },
  //   },
  //   name: {
  //     get() {
  //       return this.globalstore.getters.getname;
  //     },
  //     set(newValue) {
  //       this.$store.commit("setname", newValue);
  //     },
  //   },
  //   time: {
  //     get() {
  //       return this.globalstore.getters.gettime;
  //     },
  //     set(newValue) {
  //       this.$store.commit("settime", newValue);
  //     },
  //   },
  //   globalstore() {
  //     return this.$store || { getters: {} };
  //   },
  // },
};
</script>

<style lang="scss" scoped>
.reserve-info {
  text-align: center;
  
  .input {
    width: 300px;
    margin: 10px;
  }
}
</style>