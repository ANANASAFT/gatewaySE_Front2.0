import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";

import store from "./store";
import {validateUsrCookie} from "./utils/cookie";

import ViewUI from 'view-design';
import axios from 'axios'

import Index from './components/IndexPage/index'
import UsrHome from "./components/HomePage/UsrHome";
// import style
import 'view-design/dist/styles/iview.css';


Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.use(ViewUI)

Vue.use(VueRouter)
const routes = [
  {
  path:'/',
  component:Index
  },
  {
    path:'/home',
    component:UsrHome,
    meta:{auth:true}
  },
  ]

const router = new VueRouter({
  mode:'history',
  routes:routes
})

router.beforeEach((to,from,next) => {
  // console.log("isLogin",store.state.isLogin)
  if(to.matched.some( m => m.meta.auth)){
    // 对路由进行验证
    if(validateUsrCookie()) { // 已经登陆
      next()   // 正常跳转到你设置好的页面
    }
    else{
      // 未登录则跳转到登陆界面，query:{ Rurl: to.fullPath}表示把当前路由信息传递过去方便登录后跳转回来；
      next({path:'/',query:{ Rurl: to.fullPath} })
    }
  }else{
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')


// new Vue({
//   el:'#app',
//   router,
//   component:{App},
//   template:'<App/>'
// })
