import Vue from 'vue'
import App from './App.vue'
import ViewUI from 'view-design';
import axios from 'axios'

// import style
import 'view-design/dist/styles/iview.css';


Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.use(ViewUI)
new Vue({
  render: h => h(App),
}).$mount('#app')
