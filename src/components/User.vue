<template>
  <div class="container">
    <el-container>
      <el-header>自习室座位预约系统</el-header>
      <el-container height="310px" class="box">
        <el-aside width="200px">
          <div class="menu">
            <el-menu >
              <el-submenu index="1">
                <template slot="title"><i class="el-icon-menu"></i>座位预约</template>
                <el-menu-item-group>
                  <el-menu-item index="1-1" >
                       <router-link to="/user/reserve" class="to">座位预约</router-link>
                  </el-menu-item>
                  <el-menu-item index="1-2">
                       <router-link to="/user/exit" class="to">退坐</router-link>
                 </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title"><i class="el-icon-setting"></i>信息修改
                </template>
                <el-menu-item-group>
                  <el-menu-item index="2-1">
                      <router-link to="/user/infomodify" class="to"> 修改信息</router-link>
                  </el-menu-item>
                  <el-menu-item index="2-2">
                       <router-link to="/user/reservemodify" class="to">取消预约</router-link>
                </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
               <el-menu-item><template slot="title"><i class="el-icon-message"></i><router-link to="/user/complaint" class="to">投诉与建议</router-link>
                </template></el-menu-item>
              <el-menu-item @click="out">退出</el-menu-item>
            </el-menu>
          </div>
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
  name: "User",
  data() {
    return {};
  },
  methods: {
    out() {
      this.$router.push('/login')
    }
  },
};
</script>

<style lang="scss" scoped>
.container {
  .box {
    height: 310px;
  }
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
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
.to {
    text-decoration: none;
}

</style>