<template>
    <div class="container">
    <el-container>
      <el-header>自习室座位预约管理系统</el-header>
        <el-container class="box">
            <el-aside width="200px"> 
        <el-menu
      :router="true"
      background-color="#545c64"
      text-color="#fff"
      :unique-opened="true"
      active-text-color="#e19550">
      <el-submenu index="1" >
        <template slot="title">
          <span>系统管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/home/modify">修改预约信息</el-menu-item>
          <el-menu-item index="/home/manage">修改管理信息</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <span>座位资源管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/home/seatinfo">座位资源查看</el-menu-item>
          <el-menu-item index="/home/seatmodify">座位资源修改</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/home/seatmanage" >
        <span slot="title">座位状态管理</span>
      </el-menu-item>
      <el-menu-item index="/home/info">
        <span slot="title">通知与公告</span>
      </el-menu-item>
      <el-menu-item index="/login">
        <span slot="title">退出</span>
      </el-menu-item>
        </el-menu>
        </el-aside>
        
        <el-main>
            <!-- 内容显示区域 -->
            <router-view></router-view>             
        </el-main>
        </el-container>
        
    </el-container>
  </div>
</template>

<script>
export default {
    name:'Home'
}
</script>

<style lang="scss" scoped>
.container {
  .box {
    height: 340px;
  }
}
.el-header,
.el-footer {
  background-color: rgb(84, 92, 100);
  color: #fff;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  
}

body > .el-container {
  margin-bottom: 40px;
}
.el-menu-vertical-demo {
    width: 200px;
}
</style>