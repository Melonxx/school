<template>
  <div class="good-warp">
    <div class="good">
      <ul class="good-list">
        <li v-for="good in goodlist" :key="good.id">
          <router-link to="/good/product">
            <div class="good-bar">
              <img :src="good.imgurl" alt="">
              <div class="good-info">
                <p>{{ good.title }}</p>
                <p>{{ good.info }}</p>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'good',
  data () {
    return {
      goodlist: [
        {
          imgurl: '../../static/img/good1.jpg',
          title: '君顶酒庄酒1',
          info: 'OPTIMAS WINE'
        },
        {
          imgurl: '../../static/img/good2.jpg',
          title: '君顶酒庄酒2',
          info: 'OPTIMAS WINE'
        },
        {
          imgurl: '../../static/img/good3.jpg',
          title: '君顶酒庄酒3',
          info: 'OPTIMAS WINE'
        },
        {
          imgurl: '../../static/img/good4.jpg',
          title: '君顶酒庄酒4',
          info: 'OPTIMAS WINE'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.good-warp {
  background-color: #282626;
  background-image: linear-gradient(to bottom, #000, #282626);
  padding: 50px 0;
  height: calc(100vh - 75px);
  min-height: 745px;
}
.good {
  width: 1200px;
  margin: 0 auto;
}
.good-list li{
  width: 25%;
  padding: 0 10px;
  float: left;
  box-sizing: border-box;
  cursor: pointer;
}
.good-list li .good-bar {
  position: relative;
  border: 1px solid #c8aa7d;
  display: block;
}
.good-list li .good-bar img {
  opacity: 0.5;
  transition: 0.3s;
}
.good-list li .good-bar:hover img {
  opacity: 1;
}
.good-list li .good-bar .good-info {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background: rgba(0,0,0,0.4);
}
.good-list li .good-bar .good-info p {
  margin: 10px;
  font-size: 18px;
  color: #c8aa7d;
  text-transform: Uppercase;
}
.good-list li .good-bar .good-info p:last-child {
  font-size: 14px;
}
</style>
