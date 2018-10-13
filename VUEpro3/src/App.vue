<template>
  <div id="app">
    <ul>
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="/course">课程</router-link>
      </li>
      <li>
        <router-link to="/mark">编辑器</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      
    }
  },

}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
  }
</style>
