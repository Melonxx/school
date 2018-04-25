<template>
  <div class="backed-wrap">
    <div class="backed">
      <header>
        <div class="logo-img">
          <img src="../../static/img/logo.png" alt="">
        </div>
        <span class="title">梦瑶葡萄酒庄后台管理系统</span>
      </header>
      <div class="core-bar">
        <div class="admin-list">
          <ul>
            <li>
              <router-link to="/backed/edit">发布文章</router-link>
            </li>
            <li>
              <router-link to="/backed/publish">发布文章</router-link>
            </li>
          </ul>
        </div>
        <div class="iframe-bar">
          <!-- <edit :is="currentTab" keep-alive></edit>  -->
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import edit from './editArticle'
// import publish from './publishArticle'
export default {
  name: 'backed',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      currentTab: 'edit'
    }
  },
  // components: {
  //   edit,
  //   publish
  // },
  mounted: function () {},
  methods: {
    toggleTab: function (tab) {
      this.currentTab = tab
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.backed-wrap {
  background-color: #111;
  background-image: linear-gradient(to bottom, #000, #282626);
  min-height: 100vh;
}
header {
  line-height: 75px;
}
.backed {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.logo-img {
  width: 79px;
  display: inline-block;
}
header .title {
  color: #ddd;
  font-size: 26px;
  margin-left: 6%;
  font-style: italic;
}
.core-bar {
  padding: 10px 0;
}
.admin-list {
  color: #c8aa7d;
  display: inline-block;
}
.admin-list ul {
  border: 1px solid #c8aa7d;
}
.admin-list>ul>li>a{
  font-family: "Microsoft YaHei";
  color: #c8aa7d;
  font-size: 14px;
  display: block;
  padding: 0 50px;
  height: 50px;
  line-height: 50px;
  letter-spacing: 2px;
  -webkit-transition: all .5s;
  transition: all .5s;
  cursor: pointer;
  border-bottom: 1px solid #c8aa7d;
}
.admin-list>ul>li:last-child a {
  border-bottom: none;
}
.admin-list>ul>li:hover {
  background-color: #6b5b4d;
  color: #fff;
}
.admin-list>ul>li:hover a {
  color: #fff;
}
.iframe-bar {
  width: 1010px;
  display: inline-block;
  vertical-align: top;
}
</style>
