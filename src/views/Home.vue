<template>

  <el-container>
    <el-header class="header">
      <!-- 栅格 -->
      <el-row>
        <el-col :span="4">
          <img src="@/assets/logo.png" alt="">
        </el-col>
        <el-col :span="19">
          <div class="title">电商后台管理系统</div>
        </el-col>
        <el-col :span="1">
          <div class="logout">
            <a href="#" @click="Tuichu">退出</a>
          </div>
        </el-col>
      </el-row>
    </el-header>
  <el-container>
     <el-aside class="aside" width="200px">
        <!-- default-active 可以让某一个menu-item选中，值是menu-item的index的值 -->
        <el-menu
          unique-opened
          router
          style="height: 100%"
          default-active="/users"
          >
          <el-submenu index="1-1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
               </template>
            <el-menu-item index="/users">
              <i class="el-icon-menu"></i>
              用户列表
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item index="/roles">
              <i class="el-icon-menu"></i>
              角色列表
            </el-menu-item>
            <el-menu-item index="/rights">
              <i class="el-icon-menu"></i>
              权限列表
            </el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item index="3-1">
              <i class="el-icon-menu"></i>
              商品列表
            </el-menu-item>
            <el-menu-item index="3-2">
              <i class="el-icon-menu"></i>
              分类参数
            </el-menu-item>
            <el-menu-item index="3-3">
              <i class="el-icon-menu"></i>
              商品分类
            </el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item index="4-1">
              <i class="el-icon-menu"></i>
              订单列表
            </el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>数据统计</span>
            </template>
             <el-menu-item index="5-1">
              <i class="el-icon-menu"></i>
              数据报表
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
    <el-main>Main</el-main>
  </el-container>
</el-container>
</template>

<script>
export default {
beforeCreate() {
  var token = sessionStorage.getItem('token')
  if(!token) {
    this.$message.warning('请登录')
    this.$router.push('/login')
  }
},
methods : {
  Tuichu(){
     this.$message.success('退出成功')
    sessionStorage.clear('token') 
    this.$router.push('/login')
  }
}

};
</script>

<style>

.container {
  height: 100%;
  
}
.header {
  background-color: #b3c0d1;
   padding: 0;
}
.header .title {
  text-align: center;
  color: white;
  font-size: 24px;
  line-height: 60px;
}
.header .logout {
  line-height: 60px;
}
.header .logout a {
  color: orange;
  text-decoration: none;
}
.aside {
  background-color: #d3dce6;
}
.main {
  background-color: #e9eef3;
}
</style>




<style scoped>
  .el-header{
    background-color: #B3C0D1;
    padding: 0;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-header .title {
    color: #fff;
    font-size: 24px;
    height: 100%;
    line-height: 60px;
  }

  .logout-btn {
    position: absolute;
    right: 10px;
    color: orange;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    padding-top: 0;
  }
  .el-container {
    height: 100%;
  }

  /* 侧边导航 */
  .el-menu {
    width: 200px;
    height: 100%;
  }
</style>

