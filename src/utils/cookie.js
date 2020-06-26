import store from "../store";
export function setUsrCookie(usr_name, usr_pwd, exdays) {
    var exdate = new Date(); //获取时间
    exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
    //字符串拼接cookie
    // console.log("setcookie",'setcookie')
    window.document.cookie = "userName" + "=" + usr_name + ";path=/;expires=" + exdate.toGMTString();
    window.document.cookie = "userPwd" + "=" + usr_pwd + ";path=/;expires=" + exdate.toGMTString();
}
export function getUsrCookie() {
    if (document.cookie.length > 0) {
        var arr = document.cookie.split(';'); //这里显示的格式需要切割一下自己可输出看下
        for (var i = 0; i < arr.length; i++) {
            var arr2 = arr[i].split('='); //再次切割
            //判断查找相对应的值
            if (arr2[0].trim() == 'userName'&&arr2[1]!="") {
                // sessionStorage['username'] = arr2[1]; //保存到保存数据的地方
                store.commit('changeUsrName',arr2[1])
            }
            // else if (arr2[0].trim() == 'userPwd'&&arr2[1]!="") {
            //     sessionStorage['password'] = arr2[1];
            // }
        }
    }
}

export function validateUsrCookie() {
    var usr_name = null
    var usr_pwd = null
    if (document.cookie.length > 0) {
        var arr = document.cookie.split(';'); //这里显示的格式需要切割一下自己可输出看下
        console.log("cookie",document.cookie)
        for (var i = 0; i < arr.length; i++) {
            // console.log("arr",arr)
            var arr2 = arr[i].split('='); //再次切割
            //判断查找相对应的值
            if (arr2[0].trim() == 'userName'&&arr2[1]!="") {
                usr_name = arr2[1]; //保存到保存数据的地方
                // console.log("usrname",usr_name)
            } else if (arr2[0].trim() == 'userPwd'&&arr2[1]!="") {
                usr_pwd = arr2[1];
                // console.log("usrpwd",usr_pwd)
            }
        }
        if(usr_name!=null&&usr_pwd!=null){
            return true
        }else{
            return false
        }
    }
}

export function clearCookie() {
    setUsrCookie("", "", -1); //修改2值都为空，天数为负1天就好了
}