<template>
  <div class="container">
    <div class="head"><h1>座位选择</h1></div>
    <div class="body">
      <el-tag
        v-for="item in items"
        :key="item.label"
        class="seat"
        :effect="item.effect"
        ref="tag"
        @click="dialogVisible(item.id)"
        >{{ item.id }}</el-tag
      >
    </div>
    <el-dialog title="预约信息" :visible.sync="dialogFormVisible" width="460px">
      <ReserveInfo ref="reserveinfo"></ReserveInfo>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import ReserveInfo from "./ReserveInfo.vue";
export default {
  name: "Seat",
  components: {
    ReserveInfo,
  },
  data() {
    return {
      items:'',
      dialogFormVisible: false,
      id:"",
    };
  },
  methods: {
    dialogVisible(id) {
      console.log('点击座位时的id',id);
      this.id = id;

      this.dialogFormVisible = true;
    },
    //确认预约
    submit() {
      console.log('预约确认id',this.id);
      this.items.find(i=>i.id===this.id).effect = "light";
      //保存座位预约信息
      localStorage.setItem('seatinfo',JSON.stringify(this.items))
      //保存预约座位的用户的专业
      this.$store.commit("setmajor", this.$refs.reserveinfo.major);
      //保存预约座位的用户的学号
      this.$store.commit("setsid", this.$refs.reserveinfo.sid);
      //保存预约座位的用户的姓名
      this.$store.commit("setname", this.$refs.reserveinfo.name);
      //保存预约座位的用户的预约时间
      this.$store.commit("settime", this.$refs.reserveinfo.time);
      this.$store.commit("setid",this.id)
      this.$message({
        type: "success",
        message: "预约成功！",
      });
      setTimeout(() => {
        this.dialogFormVisible = false;
      }, 1000);
    },
    setinfo() {
      this.items = JSON.parse(localStorage.getItem('seatinfo'))
    }
  },
  created() {
    this.setinfo()
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  .head {
    position: absolute;
    top: -108px;
    left: 40%;
  }
  .body {
    position: absolute;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .seat {
      width: 80px;
      height: 50px;
      margin: 20px 20px;
      // background-color:rgb(103, 194, 58);
    }
  }
}
</style>