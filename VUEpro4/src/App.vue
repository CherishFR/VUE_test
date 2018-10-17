<template>
  <div id="app">
    <vheader></vheader>
    <router-view/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import Vheader from './components/Vheader'
import $ from 'jquery'
export default {
  name: 'App',
  components:{
    Vheader
  },
  created(){

  },
  mounted() {
    // vuex的使用: 4.在合适的时间向后端发请求，拿到数据，并且赋值给store中的变量
    // var _this = this;
    // $.ajax({
    //   url:"http:127.0.0.1:8000/api/comments/",
    //   methods:"get",
    //   success:function(data){
    //     _this.$store.state.allList = data;
    //   }
    // })
    this.$store.commit("getAllDatas");
  },
}
</script>

<style>

</style>
