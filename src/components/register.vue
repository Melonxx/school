<template>
  <div class="register-wrap">
    <div class="register">
      <h1>加入梦瑶葡萄酒庄会员俱乐部</h1>
      <p class="title">输入您注册的帐号信息</p>
      <div class="information">
        <label>帐号</label>
        <input type="text" placeholder="请输入您的帐号">
        <p class="info">请勿输入空格或下划线</p>
        <label>密码</label>
        <input type="text" placeholder="请输入您的密码">
        <button>立即注册</button>
        <p class="tipss">已有梦瑶葡萄酒庄会员俱乐部账户？<router-link to="/login">登录</router-link></p>
        <p class="tipss">梦瑶葡萄酒庄会员俱乐部拥有一望无际的葡萄园、壮观的瀑布、花园式的广场、宽敞的停车场、感受君顶高尔夫的与众不同。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
.register-wrap {
  height: 100vh;
  width: 100%;
  background-color: #000;
	background: url('../../static/img/swiper8.jpg') no-repeat;
  background-size: cover;
}
.register {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.register h1 {
  font-size: 42px;
  margin: 0;
  text-align: center;
  border-bottom: 1px solid #ddd;
  padding-bottom: 40px;
  color: #333;
}
.register .title {
  margin: 40px 0;
  text-align: center;
  color: #fff;
  font-size: 22px;
}
.information {
  width: 740px;
  padding: 75px 140px;
  background-color: #f2f2f2;
  /* text-align: center; */
}
.information label {
  display: block;
  font-size: 16px;
  letter-spacing: 1px;
  margin-bottom: 10px;
  text-transform: uppercase;
}
.information input {
  width: 100%;
  height: 42px;
  line-height: 28px;
  padding: 0 5px;
  border: 1px solid #ddd;
}
.information .info {
  color: #838383;
  margin: 7px 0 0;
  font-size: 14px;
  margin-bottom: 40px;
}
.information button {
  box-sizing: border-box;
  background: none;
  border: 2px solid #b89f7a;
  color: #b89f7a;
  font-size: 14px;
  font-weight: 700;
  width: 100%;
  height: 50px;
  line-height: 38px;
  margin: 0 auto;
  outline: none;
  text-transform: uppercase;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
  padding: 5px 50px;
  margin: 60px 0 30px;
  cursor: pointer;
}
.information button:hover {
  background-color: #b89f7a;
  color: #fff;
}
.information .tipss {
  text-align: center;
  font-size: 16px;
  color: #838383;
  line-height: 1.4;
}
.information .tipss a {
  color: #b89f7a;
}
</style>
