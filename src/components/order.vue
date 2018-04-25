<template>
  <div class="order-warp">
    <div class="banner">
        <img src="../../static/img/contact_banner.jpg" alt="">
    </div>
    <div class="order">
        <div class="dash-line">
            <span>配送地址</span>
        </div>
        <div class="address-bar clear">
            <div class="user-address" v-for="(address, index) in filterAddresslist" :key="address.id" :class="{'active': index==curindex}" @click="curindex=index">
                <p>{{ address.name }}</p>
                <p>{{ address.home }}</p>
                <p>{{ address.phone}}</p>
                <p class="hover-text">
                  <span>编辑地址</span>
                  <i class="iconfont" @click="deletebtn">&#xe69d;</i>
                </p>
            </div>
            <div class="add-btn">
                <p>添加新地址</p>
            </div>
        </div>
        <!-- <button class="loadmore" @click="listnum==3?listnum=addresslist.length:listnum=3">加载更多</button> -->
        <button class="loadmore" @click="listnum=addresslist.length" v-if="addresslist.length>listnum">加载更多</button>
        <div class="dash-line">
          <span>配送方式</span>
        </div>
        <div class="delivery">
          <div class="card" :class="{'active': delivery==1}" @click="delivery=1">
            <p>标准配送</p>
            <p>Free</p>
          </div>
          <div class="card" :class="{'active': delivery==2}" @click="delivery=2">
            <p>高级配送</p>
            <p>$180</p>
          </div>
        </div>
        <div class="dash-line">
            <span>确认订单信息</span>
        </div>
        <div class="headline">
          <ul class="clear">
            <li>商品信息</li>
            <li>商品金额</li>
            <li>商品数量</li>
            <li>金额</li>
            <!-- <li>编辑</li> -->
          </ul>
        </div>
        <div class="shopcar-list">
          <ul>
            <li class="clear" v-for="product in productlist" :key="product.id">
              <div class="info">
                <!-- <input type="checkbox" :checked=product.checked @click="selectbtn(product)"> -->
                <div class="info-img">
                  <img :src="product.imgurl" alt="">
                </div>
                <div class="info-text">
                  <p>{{ product.title }}</p>
                  <p>赠品：{{ product.present }}</p>
                </div>
              </div>
              <div class="price">
                <span>￥{{ product.price | resetMoney}}</span>
              </div>
              <div class="number">
                <span @click="changeMoney(product, -1)">-</span>
                <input type="text" disabled value="1" v-model="product.quantity">
                <span @click="changeMoney(product, 1)">+</span>
              </div>
              <div class="total">
                <span>￥{{ product.price*product.quantity | resetMoney}}</span>
              </div>
              <!-- <div class="delete" @click="deletebtn">
                <i class="iconfont">&#xe69d;</i>
              </div> -->
            </li>
          </ul>
        </div>
        <span>总金额(合计): {{ totalMoney }} 元</span>
        <button>提交订单</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'good',
  data () {
    return {
      addresslist: [
        {
          name: 'JACKBEAN',
          home: '北京市朝阳区朝阳公园',
          phone: '1313131313'
        },
        {
          name: '123JACKBEAN',
          home: '123北京市朝阳区朝阳公园',
          phone: 'a1313131313'
        },
        {
          name: '123JACKBEAN',
          home: '123北京市朝阳区朝阳公园',
          phone: 'a1313131313'
        },
        {
          name: '123JACKBEAN',
          home: '123北京市朝阳区朝阳公园',
          phone: 'a1313131313'
        },
        {
          name: '123JACKBEAN',
          home: '123北京市朝阳区朝阳公园',
          phone: 'a1313131313'
        }
      ],
      productlist: [
        {
          productId: 101,
          imgurl: '',
          title: '梦瑶葡萄名酒',
          present: '无',
          price: 19,
          quantity: 1,
          checked: true
        },
        {
          productId: 102,
          imgurl: '',
          title: 'asd梦瑶葡萄名酒',
          present: '无asd',
          price: 192,
          quantity: 1,
          checked: true
        },
        {
          productId: 103,
          imgurl: '',
          title: '22梦瑶葡萄名酒',
          present: '无2asd',
          price: 92,
          quantity: 1,
          checked: true
        },
        {
          productId: 104,
          imgurl: '',
          title: '333梦瑶葡萄名酒',
          present: '无3asd',
          price: 111,
          quantity: 1,
          checked: true
        }
      ],
      listnum: 3,
      totalMoney: 0,
      curindex: 0,
      delivery: 1
    }
  },
  computed: {
    filterAddresslist: function () {
      return this.addresslist.slice(0, this.listnum)
    }
  },
  filters: {
    resetMoney: function (value) {
      return value.toFixed(2)
    }
  },
  mounted: function () {
    this.calcTotalMoney()
    console.log(this.productlist.slice(0, 3))
  },
  methods: {
    changeMoney: function (value, way) {
      if (way > 0) {
        value.quantity++
      } else {
        value.quantity--
        if (value.quantity < 1) {
          value.quantity = 1
        }
      }
      this.calcTotalMoney()
    },
    calcTotalMoney: function () {
      var _this = this
      this.totalMoney = 0
      this.productlist.forEach(function (value, index) {
        if (value.checked) {
          _this.totalMoney += value.price * value.quantity
        }
      })
    },
    deletebtn: function () {
      if (confirm('确认删除此地址吗？')) {
        alert('删除成功！')
      }
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
.order-warp {
  background-color: #000;
  /* background-image: linear-gradient(to bottom, #000, #282626); */
  min-height: 100vh;
}
.order {
  color: #fff;
  width: 1200px;
  margin: 0 auto;
  padding-top: 60px;
}
.dash-line {
  width: 100%;
  position: relative;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  z-index: 1;
}
.dash-line span {
  background-color: #000;
  padding: 0 20px;
}
.dash-line::before {
  position: absolute;
  content: '';
  top: 12px;
  left: 0;
  height: 1px;
  width: 100%;
  background-color: #fff;
  z-index: -1;
}
.address-bar {
  padding: 50px 0 0;
}
.address-bar>div {
  width: 285px;
  height: 190px;
  border: 3px solid #fff;
  float: left;
  margin-right: 20px;
  margin-bottom: 20px;
  /* cursor: pointer; */
  transition: all .4s;
  position: relative;
  padding: 15px;
}
.address-bar>div:nth-child(4n) {
  margin-right: 0;
}
.user-address .hover-text {
  display: none;
  transition: all .4s;
  position: relative;
  bottom: -18%;
  cursor: pointer;
}
.user-address .hover-text i {
  position: absolute;
  right: 0;
  top: 1%;
}
.address-bar>div:hover {
  border: 3px solid #c8aa7d;
}
.user-address:hover .hover-text{
  display: block;
}
.hover-text span:hover {
  color: #c8aa7d;
}
.hover-text i:hover {
  color: #c8aa7d;
}
.address-bar .add-btn {
  position: relative;
  cursor: pointer;
}
.address-bar .add-btn p {
  position: absolute;
  bottom: 1%;
  left: 50%;
  transform: translateX(-50%);
}
.address-bar .add-btn::before, .address-bar .add-btn::after {
  position: absolute;
  content: '';
  height: 100px;
  width: 5px;
  transform: translate(-50%, -50%);
  top: 42%;
  left: 50%;
  background-color: #fff;
  z-index: 1;
}
.address-bar .add-btn::after {
  transform: rotate(90deg);
  top: 0;
  height: 150px;
}
.delivery {
  text-align: center;
  padding: 50px 0;
}
.delivery .card {
  display: inline-block;
  width: 280px;
  /* height: 50px; */
  text-align: center;
  border: 3px solid #fff;
  transition: all .4s;
  cursor: pointer;
}
.delivery .card:hover {
  border: 3px solid #c8aa7d;
}
/* 商品信息 */
.headline ul {
  background-color: #000;
  width: 100%;
  margin-top: 20px;
}
.headline ul li {
  float: left;
  text-align: center;
  width: 16%;
  line-height: 3.5;
}
.headline ul li:first-child {
  width: 52%;
}
/* .shopcar-list ul {} */
.shopcar-list ul li {
  padding: 38px 0;
  background-color: #282626;
  border-bottom: 1px solid #ddd;
}
.shopcar-list ul li:last-child {
  border-bottom: none;
}
.shopcar-list ul li>div {
  float: left;
  text-align: center;
  width: 16%;
}
.shopcar-list ul li>div:first-child {
  width: 52%;
  text-align: left;
  padding-left: 35px;
  /* line-height: 100px; */
}
.info>div {
  display: inline-block;
  vertical-align: middle;
}
.info .info-img {
  background-color: #fff;
  width: 100px;
  height: 100px;
}
.number input {
  width: 33px;
  text-align: center;
}
.number span {
  cursor: pointer;
  user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
}
/* 结束 */
.loadmore {
  margin-left: 50%;
  transform: translateX(-50%);
  margin-bottom: 30px;
}
.address-bar>div.active {
  border-color: #c8aa7d;
}
.delivery .active {
  border-color: #c8aa7d;
}
</style>
