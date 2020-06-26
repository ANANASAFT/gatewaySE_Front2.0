<template>
  <div>
    <Layout  style=" height:100vh">
    <Header>
      <Row>
        <i-col span="16">
          <Menu mode="horizontal" theme="dark">
            <MenuItem name = "title" style="font-size: 25px;color: white" >
              智能传感器组网引擎
            </MenuItem>
          </Menu>
        </i-col>
      </Row>
    </Header>
    <Carousel autoplay v-model="value2" loop>
      <CarouselItem>
        <div class="demo-carousel">
          <img src="../../assets/gateway.jpg" height="471" width="600"/>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <img src="../../assets/sensor.jpg" height="471" width="600"/>
        </div>
      </CarouselItem>
    </Carousel>
    <Divider></Divider>
    <Row type="flex">
      <i-col span="8"></i-col>
      <i-col span="8">
        <Button type="success" size="large" long @click="loginModal = true">登录</Button>
        <Modal
                ref = "loginModal"
                title="登录"
                v-model="loginModal"
                class-name="vertical-center-modal"
                @on-ok="login"
                @on-cancel="cancel_login"
        >
          <div :style="{textAlign:'center'}">
            <Row :style="{marginLeft: 'auto',marginRight: 'auto'}">
              <i-input prefix="ios-contact" v-model="usr_account"  placeholder="请输入用户名/邮箱" style="width: 300px" size = "large"/>
            </Row>
            <br>
            <Row :style="{marginLeft: 'auto',marginRight: 'auto'}">
              <i-input prefix="ios-apps" v-model="usr_password" type = "password" password placeholder="请输入密码" style="width: 300px" size = "large"/>
            </Row>
            <br>
            <Row type="flex" :style="{marginLeft: 'auto',marginRight: 'auto'}">
              <i-col span="12"></i-col>
              <i-col span="12">
                <a @click="loginModal = false, registerModal = true">立即注册</a>
              </i-col>
            </Row>
          </div>
        </Modal>
        <Modal
                title="注册用户"
                v-model="registerModal"
                class-name="vertical-center-modal"
                @on-ok="register"
        >
          <div :style="{textAlign:'center'}">
            <Row :style="{marginLeft: 'auto',marginRight: 'auto'}">
              <i-input prefix="ios-contact" v-model="register_account"  placeholder="请输入用户名" @on-change="verifyAccount" style="width: 300px" size = "large"/>
              <p :style="{color:'red'}"><br>{{account_validate_msg}}</p>
            </Row>
            <Row :style="{marginLeft: 'auto',marginRight: 'auto'}">
              <i-input prefix="ios-mail" v-model="register_mail" placeholder="请输入邮箱" @on-change="verifyMail" style="width: 300px" size = "large"/>
              <p :style="{color:'red'}"><br>{{mail_validate_msg}}</p>
            </Row>
            <Row :style="{marginLeft: 'auto',marginRight: 'auto'}">
              <i-input prefix="ios-apps" v-model="register_password" type = "password" password placeholder="请输入密码" @on-change="verifyPassword" style="width: 300px" size = "large"/>
              <p :style="{color:'red'}"><br>{{password_validate_msg}}</p>
            </Row>
            <Row :style="{marginLeft: 'auto',marginRight: 'auto'}">
              <i-input prefix="ios-apps" v-model="register_confirm_password" type = "password" password placeholder="确认密码" @on-change="confirmPassword" style="width: 300px" size = "large"/>
              <p :style="{color:'red'}"><br>{{confirm_password_validate_msg}}</p>
            </Row>
          </div>
        </Modal>
      </i-col>
      <i-col span="8"></i-col>
    </Row>
    <Footer class="layout-footer-center">2020-2021 &copy; ANANASAFT</Footer>
    </Layout>
  </div>
</template>
<script>
    // var _this = {}
    import {setUsrCookie} from "../../utils/cookie";

    export default {
        name:"index",
        data () {
            return {
                value2: 0,
                loginModal: false,
                registerModal: false,
                usr_account:"",
                usr_password:"",
                register_account:"",
                account_validate_msg:"",
                register_mail:"",
                mail_validate_msg:"",
                register_password:"",
                password_validate_msg:"",
                register_confirm_password:"",
                confirm_password_validate_msg:""
            }
        },
        methods:{
            login(){
                var component = this
                this.$axios({
                    url: 'http://localhost:8081/api/login_test',
                    method: 'post',
                    //发送格式为json
                    data: JSON.stringify({
                        'account':this.usr_account,
                        'password':this.usr_password,
                    }),
                    headers:
                        {
                            'Content-Type': 'application/json'
                        }
                }).then(function (return_data) {
                    var result = return_data.data.data
                    if(result == true){
                        component.$Message.info('登录成功');
                        // _this.$store.commit("changeLogin",1)
                        setUsrCookie(component.usr_account,component.usr_password,1)
                        component.$router.push("/home")
                    }else {
                        component.$Message.info('用户名或密码错误');
                        component.loginModal = true;
                        this.usr_password = ''
                        this.usr_account = ''
                    }
                });

            },
            cancel_login(){
                this.usr_password = ''
                this.usr_account = ''
            },
            register(){
                this.$Message.info('注册成功');
            },
            verifyAccount(){
                const reg = /^[a-zA-Z](?!\d+$)\w{4,15}$/;
                let str = this.register_account;
                if (reg.test(str)) {
                    this.account_validate_msg = "";
                } else {
                    this.account_validate_msg = "用户名应当为5-16位数字和字母,必须为字母开头";
                }
            },
            verifyMail(){
                const reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
                let str = this.register_mail;
                if (reg.test(str)) {
                    this.mail_validate_msg = "";
                } else {
                    this.mail_validate_msg = "邮箱格式错误";
                }
            },
            verifyPassword(){
                const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z\\W]{6,18}$/;
                let str = this.register_password;
                if (reg.test(str)) {
                    this.password_validate_msg = "";
                } else {
                    this.password_validate_msg = "密码应当为6-18位字母和数字";
                }
            },
            confirmPassword(){
                if (this.register_password==this.register_confirm_password){
                    this.confirm_password_validate_msg = "";
                } else {
                    this.confirm_password_validate_msg = "两次输入的密码不一致";
                }
            },
            // setUsrCookie(usr_name, usr_pwd, exdays) {
            //     var exdate = new Date(); //获取时间
            //     exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
            //     //字符串拼接cookie
            //     window.document.cookie = "userName" + "=" + usr_name + ";path=/;expires=" + exdate.toGMTString();
            //     window.document.cookie = "userPwd" + "=" + usr_pwd + ";path=/;expires=" + exdate.toGMTString();
            // },
            // getUsrCookie() {
            //     if (document.cookie.length > 0) {
            //         var arr = document.cookie.split(';'); //这里显示的格式需要切割一下自己可输出看下
            //         for (var i = 0; i < arr.length; i++) {
            //             var arr2 = arr[i].split('='); //再次切割
            //             //判断查找相对应的值
            //             if (arr2[0] == 'userName'&&arr2[1]!="") {
            //                 localStorage['username'] = arr2[1]; //保存到保存数据的地方
            //             } else if (arr2[0] == 'userPwd'&&arr2[1]!="") {
            //                 localStorage['password'] = arr2[1];
            //             }
            //         }
            //     }
            // },
            // clearCookie: function() {
            //     this.setCookie("", "", -1); //修改2值都为空，天数为负1天就好了
            // }
        },
        beforeCreate() {
            // _this = this;
            // console.log("islogin",this.$store.state.isLogin)
        },
        mounted() {
        }
    }
</script>