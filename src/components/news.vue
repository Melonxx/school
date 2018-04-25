<template>
  <div class="news-warp">
    <div class="news">
      <ul>
        <li v-for="news in newlist" :key="news.id">
          <div class="news-img">
            <img :src="news.imgurl" alt="">
          </div><!--
       --><div class="news-text">
            <p class="time">{{ news.time }}</p>
            <p class="title">
              <router-link to="/news/details">{{ news.title }}</router-link>
            </p>
            <p class="info">{{ news.info }}</p>
            <p class="view">
              <router-link to="/news/details">查看详情</router-link>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'news',
  data () {
    return {
      newlist: [
        {
          imgurl: '../../static/img/news1.png',
          time: '2017.5',
          title: '梦瑶酒庄助力亚洲顶级篮球赛事1',
          info: '摘要：2017年超级8澳门篮球赛正式开赛，八只亚洲顶尖篮球俱乐部齐聚澳门争夺王者荣耀，君顶酒庄酒全程助力该项顶级赛事1'
        },
        {
          imgurl: '../../static/img/news1.png',
          time: '2017.5',
          title: '梦瑶酒庄助力亚洲顶级篮球赛事2',
          info: '摘要：2017年超级8澳门篮球赛正式开赛，八只亚洲顶尖篮球俱乐部齐聚澳门争夺王者荣耀，君顶酒庄酒全程助力该项顶级赛事2'
        },
        {
          imgurl: '../../static/img/news1.png',
          time: '2017.5',
          title: '梦瑶酒庄助力亚洲顶级篮球赛事3',
          info: '摘要：2017年超级8澳门篮球赛正式开赛，八只亚洲顶尖篮球俱乐部齐聚澳门争夺王者荣耀，君顶酒庄酒全程助力该项顶级赛事3'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.news-warp {
  background-color: #282626;
  background-image: linear-gradient(to bottom, #000, #282626);
  padding: 50px 0;
  min-height: calc(100vh - 75px);
}
.news {
  width: 1200px;
  margin: 0 auto;
  /* background-color: #fff; */
}
.news>ul>li {
  background-color: #fff;
  margin: 0 0 35px 0;
}
.news-img, .news-text {
  display: inline-block;
  vertical-align: top;
}
.news-img {
  width: 535px;
  transition: all .4s;
  overflow: hidden;
}
.news-img img {
  transition: all .4s;
}
.news-img:hover img{
  transform: scale(1.12)
}
.news-text {
  width: 665px;
  padding: 0 50px 0 20px;
  font-size: 16px;
  box-sizing: border-box;
}
.news-text .time {
  color: #151515;
}
.news-text .title a {
  font-size: 22px;
  color: #151515;
  transition: all .4s;
}
.news-text .title a:hover {
  color: #ff6600;
}
.news-text .info {
  line-height: 1.2;
}
.news-text .view a {
  color: #666;
  font-size: 17px;
}
.news-text .view a:hover {
  color: #f60;
}
</style>
