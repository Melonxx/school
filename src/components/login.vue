<template>
  <div class="login">
    <div class="login-wrap">
        <div class="login-logo">
            <img src="../../static/img/logo.png" alt="" />
        </div>
        <p class="login-title">梦瑶葡萄酒庄商城</p>
        <div class="account">
            <i class="iconfont">&#xe70b;</i>
            <input type="text" placeholder="请输入用户名"/>
        </div>
        <div class="password">
            <i class="iconfont">&#xe82b;</i>
            <input type="password" placeholder="请输入密码" />
        </div>
        <div class="remember">
            <label class="forget-btn">忘了密码</label>
            <label class="register-btn">
				<router-link to="/register">立即注册</router-link>
			</label>
        </div>
        <p class="login-btn">登陆</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
    //   msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
  font-family: 'iconfont';
  src: url('../assets/iconfont.eot');
  src: url('../assets/iconfont.eot?#iefix') format('embedded-opentype'),
  url('../assets/iconfont.woff') format('woff'),
  url('../assets/iconfont.ttf') format('truetype'),
  url('../assets/iconfont.svg#iconfont') format('svg');
}
.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.login {
	background-color: #000;
	background: url('../../static/img/swiper8.jpg') no-repeat;
    background-size: cover;
    height: 100vh;
}
.icon {
   width: 1em; height: 1em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
}
.login-wrap {
	width: 350px;
	padding: 27px;
	background-color: #fff;
	border-radius: 8px;
	box-shadow: 0 0 9px 1px rgba(0,0,0,0.06);
	position: absolute;
	top: 50%;
	left: 50%;
	box-sizing: border-box;
	transform: translate(-50%,-50%);	
}
.login-logo {
	width: 66.9px;
	height: 62.8px;
	margin: 0 auto;
	margin-bottom: 13.2px;
}
.login-title {
	font-size: 16px;
	font-weight: bold;
	text-align: center;
	line-height: 22px;
}
.account, .password {
	border-bottom: 1px solid #eee;
	padding: 18.1px 0 6.3px 0;
}
.account i, .password i {
	font-size: 20.6px;
	color: #ccc;
	vertical-align: -0.1em;
} 
.account input, .password input {
	border: none;
	line-height: 20px;
	color: #AAAAAA;
	margin-left: 22.3px;
	outline:none;
} 
.remember {
	margin: 23px 0 18px 0;
	text-align: right;
	font-size: 13px;
	line-height: 18px;
	color: #aaa;
}
.remember label {
	cursor: pointer;
}
.remember a {
	color: #7DADE6
}
/* .remember input{
	width: 14px;
	height: 14px;
	border: 1px solid #ddd;
	border-radius: 2px;
	vertical-align: text-top;
	cursor: pointer;
} */
.login-btn {
	width: 100%;
	height: 36px;
	line-height: 36px;
	text-align: center;
	color: #fff;
	font-size: 14px;
	border-radius: 6px;
	background-color: #7DADE6;
	margin: 0;
	cursor: pointer;
}
</style>
