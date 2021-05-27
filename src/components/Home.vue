/**
 * @Author: Your name
 * @Date:   2021-04-22 09:38:22
 * @Last Modified by:   Your name
 * @Last Modified time: 2021-04-23 09:49:47
 */
<template>
  <el-container class="el-container">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu >
        <template slot="title">系统管理</template>
        <el-menu-item index="1-1"><router-link to="/home/modify">修改预约信息</router-link></el-menu-item>
        <el-menu-item index="1-2"><router-link to="">修改管理信息</router-link></el-menu-item>
      </el-submenu>
      
      <el-submenu index="2">
        <template slot="title">座位资源管理</template>
        <el-menu-item index="2-1"><router-link to="">座位资源查看</router-link></el-menu-item>
        <el-menu-item index="2-2"><router-link to="">座位数量修改</router-link></el-menu-item>
      </el-submenu>
      <el-menu-item index="3">座位状态管理</el-menu-item>
      <el-menu-item index="4">通知与公告</el-menu-item>
    </el-menu>
    
  </el-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      activeIndex2: "1",
    };
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.el-container {
  height: 500px;
  border: 1px solid #eee;
  position: relative;
  .el-menu-demo {
    // background-color: rgb(84, 92, 100);
    position: absolute;
    margin-top: 10%;
    margin-left: 25%;
    width: 800px;
    height: 500px;
  }
  .el-header {
    background-color: #b3c0d1;
    // color: #333;
    line-height: 60px;
    text-align: right;
    font-size: 12px;
  }
  .el-aside {
    width: 200px;

    // color: #333;
  }
  .el-main {
  }
}
</style>
