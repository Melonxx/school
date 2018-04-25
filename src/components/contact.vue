<template>
  <div class="contact-warp">
    <div class="banner">
      <img src="../../static/img/contact_banner.jpg" alt="">
    </div>
    <div class="contact">
      <p class="headline">君顶酒庄</p>
      <p class="address">
        <span>地址：浙江商业职业技术学院</span>
        <span>编：265600</span>
        <span>电话：400-618191915</span>
        <span>邮箱：saaaaaaaap@nava.cn</span>
      </p>
      <div class="map-bar">
        <p class="title">地理位置</p>
        <div class="map">
          <img src="../../static/img/map.jpg" alt="">
        </div>
      </div><!--
   --><div class="feedback-bar">
        <p class="title">意见反馈</p>
        <input type="text" placeholder="姓名">
        <input type="text" placeholder="您的联系方式，方便我们联系并与您沟通">
        <textarea cols="30" rows="10" placeholder="留下您想说的话"></textarea>
        <button>提交留言</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contact-warp {
  background-color: #282626;
  background-image: linear-gradient(to bottom, #000, #282626);
  min-height: 100vh;
}
.contact {
  color: #fff;
  width: 1200px;
  margin: 0 auto;
  padding-top: 60px;
}
.headline, .map-bar .title, .feedback-bar .title {
  font-size: 21px;
}
.address span {
  margin-right: 45px;
  font-size: 16px;
}
.map-bar, .feedback-bar {
  display: inline-block;
  margin-top: 50px;
  vertical-align: top;
}
.map-bar {
  width: 670px;
}
.map-bar .map {
  border: 1px solid #c8aa7d;
}
.feedback-bar {
  width: 530px;
  padding-left: 30px;
}
.feedback-bar input {
  height: 46px;
  width: 100%;
  line-height: 46px;
  color: #fff;
  border: 1px solid #c8aa7d;
  padding: 0 10px;
  margin-bottom: 18px;
  background-color: #282626;
}
.feedback-bar textarea {
  background: none;
  padding: 10px;
  border: 1px solid #c8aa7d;
  color: #fff;
  height: 120px;
  width: 100%;
}
.feedback-bar button {
  cursor: pointer;
  width: 100%;
  border: none;
  background: #c8aa7d;
  color: #151515;
  font-size: 18px;
  transition: 0.3s;
  line-height: 46px;
  margin-top: 17px;
}
.feedback-bar button:hover {
  background-color: #fff;
}
</style>
