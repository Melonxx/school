<template>
  <div class="product-wrap">
    <div class="product">
        <div class="product-img">
            <img src="../../static/img/product1.png" alt="">
        </div>
        <div class="product-info">
            <h2>{{ msg.title }}</h2>
            <p class="en">{{ msg.en }}</p>
            <p class="pro">{{ msg.pro }}</p>
            <p>品种：{{ msg.variety }}</p>
            <p>年份：{{ msg.years }}</p>
            <p>酒精度：{{ msg.alcohol }}</p>
            <p>色泽：{{ msg.color }}</p>
            <p>嗅香：{{ msg.nose }}</p>
            <p>口感：{{ msg.mouse }}</p>
            <p>适饮温度：{{ msg.temperature }}</p>
            <router-link to="/order"><input class="buy-btn" type="button" value="立即购买"></router-link>
            <input class="add-btn" type="button" value="加入购物车">
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product',
  data () {
    return {
      msg: {
        title: '君顶凤凰湖T50高级干红葡萄酒',
        en: 'Phoenix Lake T50',
        pro: '君顶酒庄精选优质酿酒葡萄，融合传统工艺与现代科技，酿造出独具特色的T系列葡萄酒。',
        variety: '赤霞珠为主',
        years: '1924',
        alcohol: '12.3%vol',
        color: '宝石红色',
        nose: '浓郁的红色浆果、红樱桃等果香萦绕着优雅的香草香气。',
        mouse: '入口圆润丝滑，酒体平衡细致，回味悠长。',
        temperature: '15 – 18℃'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product-wrap {
    height: calc(100vh - 75px);
    min-height: 745px;
    width: 100%;
    background-image: url('../../static/img/product_banner.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    z-index: 1;
}
.product-wrap::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.4);
    left: 0;
    right: 0;
    z-index: -1;
}
.product {
    width: 1200px;
    margin: 0 auto;
    padding-left: 70px;
    padding-top: 12%;
}
.product-img, .product-info {
    display: inline-block;
    vertical-align: top;
}
.product-img {
    width: 263px;
    margin-right: 70px;
}
.product-info h2 {
    color: #c8aa7d;
    font-size: 30px;
    padding-bottom: 10px;
    font-weight: normal;
    margin: 0;
}
.product-info p {
    color: #fff;
    font-size: 18px;
    margin-top: 0;
    margin-bottom: 16px;
}
.product-info .en {
    color: #c8aa7d;
    margin: 0;
}
.product-info .pro {
    padding: 30px 0 25px 0;
    line-height: 30px;
    border-bottom: 1px solid #c8aa7d;
    margin-bottom: 30px;
}
.product-info input {
    width: 120px;
    float: right;
    border: none;
    background: #c8aa7d;
    color: #151515;
    font-size: 18px;
    transition: 0.3s;
    line-height: 46px;
    cursor: pointer;
}
.product-info input:hover {
    background-color: #fff;
}
.product-info .buy-btn {
    margin-left: 20px;
}
</style>
