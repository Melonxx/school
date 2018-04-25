<template>
  <div id="index">
    <myheader></myheader>
    <router-view/>
  </div>
</template>

<script>
import myheader from '../components/myheader'
export default {
  name: 'index',
  components: {
    myheader
  }
}
</script>

<style>
</style>

