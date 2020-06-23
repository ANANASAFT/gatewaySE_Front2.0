<template>
  <div>
    <Layout :style="{padding: '60px 0px',height:'100vh',background: '#fff',fontSize:'20px',textAlign:'center'}">
      <Row type="flex" :style="{marginLeft: 'auto',marginRight: 'auto'}">
        <i-col span="12">用户名:</i-col>
        <i-col span="12"><i-input style="width: 300px" readonly value = "usr_account"></i-input></i-col>
      </Row>
      <br>
      <Row type="flex" :style="{marginLeft: 'auto',marginRight: 'auto'}">
        <i-col span="12">邮箱:</i-col>
        <i-col span="12"><i-input style="width: 300px" readonly value = "usr_e-mail"></i-input></i-col>
      </Row>
      <br>
      <Row type="flex" :style="{marginTop:'15%'}">
        <i-col span="8"><a>修改密码</a></i-col>
        <i-col span="4"></i-col>
        <i-col span="4"></i-col>
        <i-col span="8"><a @click="signout">退出登录</a></i-col>
      </Row>
      <br>
    </Layout>
  </div>
</template>

<script>
    import {clearCookie} from "../../utils/cookie";

    export default {
        name: "UsrManagement",
        methods:{
            signout(){
                clearCookie()
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>

</style>