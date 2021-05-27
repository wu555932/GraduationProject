<template>
     <div>
    <div class="container">
      <el-date-picker
        v-model="time"
        type="date"
        placeholder="选择日期"
        class="time"
      >
      </el-date-picker>
      <el-input placeholder="学号" class="sid" v-model="sid"></el-input>

      <el-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4 }"
        placeholder="请输入投诉内容"
        v-model="complaint"
        class="complaint"
      >
      </el-input>
      <el-input
        type="textarea"
        placeholder="备注"
        v-model="comment"
        class="comment"
      >
      </el-input>
      <el-button type="primary" class="btn" @click="submit">提交</el-button>
    </div>
  </div>
</template>

<script>
export default {
    name:'Info'
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  .time {
    position: absolute;
    top: -10px;
    left: 600px;
  }
  .sid {
    position: absolute;
    top: -10px;
    left: 0;
    width: 200px;
  }
  .complaint {
    position: absolute;
    top: 70px;
    left: 0;
    width: 500px;
  }
  .comment {
    position: absolute;
    top: 140px;
    left: 0;
    width: 500px;
  }
  .btn {
      position: absolute;
      left: 0;
      top:215px;
  }
}
</style>