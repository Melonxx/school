<template>
  <div class="trip">
    <div class="img-wrap">
        <div class="img">
            <img src="../../static/img/trip01.jpg" alt="">
            <p>梦瑶葡萄园酒店</p>
        </div>
        <div class="img">
            <img src="../../static/img/trip02.jpg" alt="">
            <p>梦瑶高尔夫</p>
        </div>
        <div class="img">
            <img src="../../static/img/trip03.jpg" alt="">
            <p>旅程预定</p>
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
.trip {
    background-image: url('../../static/img/bg_trip.jpg');
    height: calc(100vh - 75px);
    min-height: 745px;
    width: 100%;
    padding-top: 50px;
}
.img-wrap {
    /* position: absolute; */
    /* top: calc(50% + 37.5px); */
    /* left: 50%; */
    /* transform: translate(-50%, -50%); */
    overflow: hidden;
    width: 100%;
    text-align: center;
}
.img-wrap .img {
    box-sizing: border-box;
    width: 402px;
    display: inline-block;
    vertical-align: middle;
    margin-left: 15px;
    filter: grayscale(90%);
    transition: all .4s;
    position: relative;
    cursor: pointer;
}
.img-wrap .img:first-child {
    margin-left: 0;
}
.img-wrap .img:hover {
    filter: grayscale(0);
}
.img-wrap .img p {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 30px;
    opacity: 0;
    transition: .4s;
}
.img-wrap .img:hover p {
    opacity: 1;
}
</style>
