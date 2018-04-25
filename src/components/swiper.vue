<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="slide in swiperSlides" v-bind:style="{ 'background-image': 'url(' + slide + ')' }" :key="slide.id"></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'carrousel',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        notNextTick: true,
        autoplay: true,
        loop: true,
        direction: 'horizontal',
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        pagination: {
          el: '.swiper-pagination'
        },
        centeredSlides: true,
        paginationClickable: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        keyboard: true,
        mousewheelControl: true,
        observeParents: true, // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        debugger: true
      },
      swiperSlides: ['../../static/img/swiper1.jpg', '../../static/img/swiper2.jpg', '../../static/img/swiper3.jpg', '../../static/img/swiper4.jpg']
      // reheight: 100 + 'vh' - 75 + 'px'
    }
  },
  computed: {
    // swiper () {
      // return this.$refs.mySwiper.swiper
    // }
  },
  mounted () {
    console.log(1)
    this.img()
    // this.swiper.slideTo(0, 0, false)
  },
  methods: {
    img () {
      // let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      // let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight - 75
      // this.$refs.reheight.style.height = h + 'px'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import "../../node_modules/swiper/dist/css/swiper.css";
/* @import "../assets/swiper-3.4.2.min.css"; */
html, body, #app {
  height: 100%;
  width: 100%;
}
.swiper-container-autoheight, .swiper-container-autoheight .swiper-slide {
  height: calc(100vh - 75px);
  min-height: 745px;
}
.swiper-pagination-bullet {
  width: 15px;
  height: 15px;
}
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 8%;
}
</style>
