<template>
  <div class="header">
    <div class="wrap clear">
      <div class="logo-img">
        <img src="../../static/img/logo.png" alt="">
      </div>
      <div class="head-list clear">
        <ul>
          <li>
            <router-link to="/swiper">梦瑶简介</router-link>
            <div class="son-wrap">
              <ul class="son-list clear">
                <li>酒庄概况</li>
                <li>酒庄优势</li>
                <li>大事记</li>
              </ul>
            </div>
          </li>
          <li>
            <router-link to="/good">梦瑶产品</router-link>
            <div class="son-wrap">
              <ul class="son-list clear">
                <li>梦瑶酒庄酒</li>
                <li>梦瑶产品酒</li>
                <li>梦瑶艺术个性化</li>
                <li>梦瑶小众佳酿</li>
              </ul>
            </div>
          </li>
          <li>
            <router-link to="/trip">梦瑶之旅</router-link>
            <div class="son-wrap">
              <ul class="son-list clear">
                <li>梦瑶葡萄园酒店</li>
                <li>梦瑶高尔夫</li>
                <li>携程预订</li>
              </ul>
            </div>
          </li>
          <li>
            <router-link to="/news">梦瑶动态</router-link>
            <div class="son-wrap">
              <ul class="son-list clear">
                <li>梦瑶新闻</li>
                <li>梦瑶图集</li>
                <li>梦瑶视频</li>
              </ul>
            </div>
          </li>
          <li>
            <router-link to="/contact">联系我们</router-link>
          </li>
        </ul>
      </div>
      <div class="last-box">
        <div class="search">
          <i class="iconfont">&#xe6ac;</i>
          <input type="text" placeholder="请输入搜索商品">
        </div>
        <div class="link-bag">
          <i class="iconfont" @click="boxList()">&#xe713;</i>
          <ul class="bag-list" v-show="listToggle">
            <li @click="boxList()">
              <router-link to="/shopcar">
                <i class="iconfont">&#xe698;</i>
                <span>购物车</span>
              </router-link>
            </li>
            <li @click="boxList()">
              <router-link to="/login">
                <i class="iconfont">&#xe7ce;</i>
                <span>收藏</span>
              </router-link>
            </li>
            <li @click="boxList()">
              <router-link to="/login">
                <i class="iconfont">&#xe723;</i>
                <span>订单</span>
              </router-link>
            </li>
            <li @click="boxList()">
              <router-link to="/login">
                <i class="iconfont">&#xe6ae;</i>
                <span>账户</span>
              </router-link>
            </li>
            <li @click="boxList()">
              <router-link to="/login">
                <i class="iconfont">&#xe6b8;  </i>
                <span>登陆</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myheader',
  data () {
    return {
      listToggle: false     // 登陆提示框
    }
  },
  methods: {
    boxList: function () {
      this.listToggle = !this.listToggle
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style socped>
.header {
    height: 75px;
    background: #171717;
    position: relative;
}
.header .wrap {
    width: 1200px;
    margin: 0 auto;
}
.logo-img {
    width: 79px;
    padding-top: 7px;
    float: left;
}
.head-list {
    float: left;
    margin-left: 50px;
}
.head-list>ul>li {
    float: left;
    /* color: #c8aa7d;*/
    font-size: 14px;
    display: block;
    /* padding: 0 50px; */
    /* height: 75px; */
    /* line-height: 75px; */
    /* letter-spacing: 2px; */ 
    cursor: pointer;
    transition: all .5s;
}
.head-list>ul>li:hover {
    background-color: #6b5b4d;
    color: #fff;
}
.head-list>ul>li>a {
    font-family: "Microsoft YaHei";
    color: #c8aa7d;
    font-size: 14px;
    display: block;
    padding: 0 50px;
    height: 75px;
    line-height: 75px;
    letter-spacing: 2px;
    transition: all .5s;
}
.head-list>ul>li:hover a {
  color: #fff;
}
.head-list ul li:hover .son-list {
    display: inline-block;
}
.head-list>ul>li::after {
    content: '';
    clear: both;
    overflow: hidden;
    visibility: hidden;
}
.son-wrap {
    position: absolute;
    top: 75px;
    left: 0;
    width: 100%;
    background-color: rgba(0,0,0,0.3);
    text-align: center;
    line-height: 58px;
    z-index: 5;
}
.son-list {
    display: none;
    box-sizing: border-box;
    /* width: 1200px; */
    /* margin: 0 auto; */
    /* margin-left: 50%; */
    /* transform: translateX(-50%) */
}
.son-list li {
    padding: 0 35px;
    /* line-height: 58px; */
    color: #fff;
    float: left;
    box-sizing: border-box;
    transition: all .5s;
}
.son-list li:hover {
    color: #c8aa7d;
}
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
.last-box {
  display: inline-block;
  vertical-align: middle;
  margin-left: 50px;
  user-select: none;  
}
.last-box .search {
  color: #fff;
  line-height: 75px;
  display: inline-block;
  vertical-align: top;
}
.last-box .search input {
  width: 125px;
  height: 22px; 
  background-color: #171717;
  border: none;
  padding: 2px 5px;
  color: #fff;
  outline: none;
}
.link-bag {
  display: inline-block;
  position: relative;
}
.link-bag>i:first-child{
  color: #fff;
  font-size: 20px;
  margin-left: 10px;
  line-height: 75px;
  cursor: pointer;
}
.link-bag>i:first-child:hover {
  color: #c8aa7d;
}
.bag-list {
  position: absolute;
  top: 75px;;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}
.bag-list li {
  width: 127px;
  color: #fff;
  background-color: rgba(0,0,0,0.4);
  padding-left: 27px;
  line-height: 45px;
}
.link-bag .bag-list li i {
  margin-left: 0;
  margin-right: 5px;
  color: #fff;
  transition: .4s;
}
.link-bag .bag-list li a {
  color: #fff;
  transition: .4s;
}
.link-bag .bag-list li:hover a, .link-bag .bag-list li:hover i {
  color: #c8aa7d;
}
</style>
