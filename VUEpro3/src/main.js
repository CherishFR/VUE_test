import Vue from 'vue'
import App from './App.vue'

import $ from 'jquery'
// 1.导入vue-router
import VueRouter from 'vue-router'
// 2.使用vue-router
Vue.use(VueRouter);
// 3.定义（路由）组件
import Vmain from './components/Vmain'
import Vcourse from './components/Vcourse'
import Vmarked from './components/Vmarked'
// 4.定义路由对象，每一个路由映射一个组件
const routes = [
  {path:'/',component:Vmain},
  {path:'/course',component:Vcourse},
  {path:'/mark',component:Vmarked}
]
const router = new VueRouter({
  mode: 'history',
  routes
})
new Vue({
  el: '#app',
  // 5.创建,挂载根实例
  router,
  render: h => h(App)
})
