import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        isLogin:0,
        usr_name:"abc"
    },
    mutations:{
        changeLogin(state, data)
        {
            state.isLogin = data;
        },
        changeUsrName(state, data){
            state.usr_name = data;
        }
    }
});
export default store