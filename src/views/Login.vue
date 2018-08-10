<template>
  <div class="login-wrap">
    <el-form
      label-position="top"
      :model="formData"
      label-width="80px">
      <h2>用户登录</h2>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="formData.username"></el-input>
      </el-form-item>
      <el-form-item @keyup.enter.native ="HanldeLogin" label="密码" prop="password">
        <el-input type="password" v-model="formData.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" type="primary" @click.prevent="HanldeLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {

data(){
  return {
    formData:{
       username:'' ,
       password:''
    }
    }
},
methods: {
async HanldeLogin(){
    var response = await axios.post
    ('http://localhost:8888/api/private/v1/login',this.formData)

    var {data: {meta: { status, msg} } } = response;

    if(status === 200){
              
             this.$message.success(msg);
             var token = response.data.data.token;
             sessionStorage.setItem('token',token);
             this.$router.push('/');
            }else {
             this.$message.error(msg)
         }
}
}
}
</script>

<style scoped>
 .login-wrap {
    background-color: #324152;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .el-form.el-form--label-top {
    padding: 40px;
    width: 500px;
    border-radius: 5px;
    background-color: #fff;
  }
  .el-form .login-btn {
    width: 100%;
  }
</style>
