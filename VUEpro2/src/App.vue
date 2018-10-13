<template>
  <div id="app">
    <Vheader></Vheader>
    <h2>{{currentMsg}}</h2>
    <img :src="imgSrc">
    <ul>
      <li v-for="item in getArray">
        <a href="javascript:;">{{item}}</a>
      </li>
    </ul>
    <button @click="clickHandler">修改</button>
    <!-- 子组件向父组件传值：1.自定义事件 -->
    <Vcontent @addarea="addHandler"></Vcontent>
    <!-- 父子组件传值：1.绑定自定义属性 -->
    <Vfooter :cityArray='citys'></Vfooter>
  </div>
</template>

<script>
import imgSrc from './assets/logo.png'

import Vheader from './components/Vheader'
import Vcontent from './components/Vcontent'
import Vfooter from './components/Vfooter'
export default {
  name: 'app',
  data () {
    return {
      msg:"hello",
      stars:[
        '刘锦涛','冯芮'
      ],
      imgSrc:imgSrc,
      citys:['天府新区','成华区','金牛区']
    }
  },
  methods:{
    clickHandler(){
      this.msg = "hahaha",
      this.stars.push('赵曦')
    },
    addHandler(){
      this.citys.push("高新区")
    }
  },
  computed:{
    currentMsg(){
      return this.msg
    },
    getArray(){
      return this.stars
    }
  },
  components:{
    Vheader,
    Vcontent,
    Vfooter
  }
}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
  }
</style>
