<template>
  <div id="app">
    <Vheader></Vheader>
    <Vcontent></Vcontent>
    <Vfooter></Vfooter>
  </div>
</template>

<script>
// 1.先引入子组建
import Vheader from './components/Vheader'
import Vcontent from './components/Vcontent'
import Vfooter from './components/Vfooter'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{

  },
  computed:{

  },
  // 2.挂载
  components:{
    Vheader:Vheader,
    Vfooter,
    Vcontent,
  }
}
</script>

<style>

</style>
