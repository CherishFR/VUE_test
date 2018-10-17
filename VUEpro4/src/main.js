// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


Vue.config.productionTip = false

// vuex的使用: 1.导入
import Vuex from 'vuex'
// vuex的使用: 2.使用
Vue.use(Vuex);
// vuex的使用: 3.提供初始state对象和mutations
const store = new Vuex.Store({
  state:{
    // 这里的状态跟每个组件的数据属性有关联
    allList:[],
    note:{
      title:"",
      content:"",
      markdown:""
    }
  },
  mutations:{
    getAllDatas(state){
      $.ajax({
        url:"http:127.0.0.1:8000/api/comments/",
        methods:"get",
        success:function(data){
          state.allList = data;
        }
      })
    },
    ADDNOENOTE(state,json){
      $.ajax({
        url:"http:127.0.0.1:8000/api/comments/create/",
        data:json,
        method:"post",
        success:function(data){
            state.allList = data
        },
        error:function(err){
            alert(err)
        },
    })
    }
  },
  actions:{
    addOneNote(context){
      context.commit("ADDNOENOTE")
    }
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
