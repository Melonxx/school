<template>
  <div class="edit-wrap">
    <div class="edit">
      <div class="title">
        <h3>发布文章</h3>
      </div>
      <div class="container">
        <div class="first-floor">
          <span>标题</span>
          <input type="text">
        </div>
        <div class="second-floor">
          <span>摘要</span>
          <input type="text">
        </div>
        <div class="third-floor">
          <span>内容</span>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
      </div>
      <button>提交</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'good',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted: function () {},
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.edit {
  width: 100%;
  border: 1px solid #c8aa7d;
}
.edit .title {
  background-color: #6b5b4d;
}
.edit .title h3 {
  margin: 0;
  line-height: 50px;
  color: #fff;
  margin-left: 25px;
}
.container {
  padding: 20px 20px 20px 125px;
}
.container>div {
  color: #fff;
  margin-bottom: 25px;
}
.container>div input, .container>div textarea {
  width: 93%;
  vertical-align: top;
}
</style>
