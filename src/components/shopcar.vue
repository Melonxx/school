<template>
  <div class="shopcar-warp">
    <div class="banner">
        <img src="../../static/img/contact_banner.jpg" alt="">
    </div>
    <div class="shopcar">
        <div class="dash-line">
            <span>购物车</span>
        </div>
        <div class="headline">
          <ul class="clear">
            <li>商品信息</li>
            <li>商品金额</li>
            <li>商品数量</li>
            <li>金额</li>
            <li>编辑</li>
          </ul>
        </div>
        <div class="shopcar-list">
          <ul>
            <li class="clear" v-for="product in productlist" :key="product.id">
              <div class="info">
                <input type="checkbox" :checked=product.checked @click="selectbtn(product)">
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
              <div class="delete" @click="deletebtn">
                <i class="iconfont">&#xe69d;</i>
              </div>
            </li>
          </ul>
        </div>
        <div class="bottom-bar clear">
          <div>
            <!-- <input type="checkbox" :ckecked=checkAll @click="checkAllBtn"> -->
            <span @click="checkAllBtn(true)">全选</span>
            <span @click="checkAllBtn(false)">取消全选</span>
          </div>
          <span>总金额(合计): {{ totalMoney }} 元</span>
          <router-link to="/order"><button>立即结算</button></router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'good',
  data () {
    return {
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
      checkAll: true,
      totalMoney: 0
    }
  },
  filters: {
    resetMoney: function (value) {
      return value.toFixed(2)
    }
  },
  mounted: function () {
    this.calcTotalMoney()
    this.all()
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
    selectbtn: function (value) {
      value.checked = !value.checked
      this.calcTotalMoney()
    },
    checkAllBtn: function (flag) {
      this.productlist.forEach(function (value, index) {
        value.checked = flag
      })
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
      if (confirm('确认删除此商品吗？')) {
        alert('删除成功！')
      }
    },
    all: function () {
      this.$index.all()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/shopcar.css";
</style>
