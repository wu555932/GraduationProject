/**
 * @Author: Your name
 * @Date:   2021-04-22 09:38:22
 * @Last Modified by:   Your name
 * @Last Modified time: 2021-04-23 09:49:47
 */
<template>
        <el-container class="el-container">
          <el-header class="el-header">
            <div>头部</div>
          </el-header>
          <el-aside class="el-aside">
            <div>菜单</div>
          </el-aside>
          <el-main class="el-main">
            <div>内容区域</div>
          </el-main>
        </el-container>
</template>

<script>
    export default {
      name:'Home',
        data() {
            return {};
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>
  .el-container {
    height: 500px;

    border: 1px solid #eee;
    .el-header {
      background-color:#B3C0D1;
      color:#333;
      line-height:60px;
      text-align:right;
      font-size:12px;
    }
    .el-aside {
      width:200px;

      color:#333;
    }
    .el-main {}
  }
</style>
