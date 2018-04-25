<template>
  <div class="publish-wrap">
    <div class="publish">
      <div class="title">
        <h3>管理文章</h3>
      </div>
      <div class="container">
        <ul>
          <li>
            <span>001</span>
            <span>开心的一天</span>
            <span>删除 修改</span>
          </li>
        </ul>
      </div>
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
.publish {
  width: 100%;
  border: 1px solid #c8aa7d;
}
.publish .title {
  background-color: #6b5b4d;
}
.publish .title h3 {
  margin: 0;
  line-height: 50px;
  color: #fff;
  margin-left: 25px;
}
.container {
  padding: 20px;
  color: #fff;
}
</style>
