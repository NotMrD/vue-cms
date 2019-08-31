import Vue from 'vue'
import app from './App.vue'

//导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'

import VueResource from 'vue-resource'
Vue.use(VueResource)

import Vuex from 'vuex'
Vue.use(Vuex)

var car=JSON.parse(localStorage.getItem('car')||'[]')
var store =new Vuex.Store({
    state:{
      car:car
    },
    mutations:{
      addToCar(state,goodsinfo){
         var flag=false
        state.car.some(item=>{
          if(item.id==goodsinfo.id){
            item.count+=parseInt(goodsinfo.count)
              flag=!flag
              return true
          }
        })
        if(!flag){
          state.car.push(goodsinfo)
        }
        console.log(state.car)
        localStorage.setItem('car',JSON.stringify(state.car))
      },
      updataGoodsCount(state,goodsinfo){
        state.car.some(item=>{
          if(item.id==goodsinfo.id){
            item.count=parseInt(goodsinfo.count) 
            return true
          }
        })
        localStorage.setItem('car',JSON.stringify(state.car))
        console.log(state.car.count)
      } ,
      removeGoodsInfo(state,id){
        state.car.some((item,i)=>{
          if(item.id=id){
            state.car.splice(i,1)
            return true
          }
        })
        localStorage.setItem('car',JSON.stringify(state.car))
      },
      updateSelected(state,info){
        state.car.forEach(item=>{
          if(item.id==info.id)
          item.selected=info.selected
        })
        console.log('ok')
        localStorage.setItem('car',JSON.stringify(state.car))
      }
    },
    getters:{
      getAllCount(state){
        var c=0
        state.car.forEach(item=>{
          c+=item.count
          // console.log(c)
          return c
        })
      },
      getGoodsCount(state){
        var a={}
        state.car.forEach(item=>{
          a[item.id]=item.count
        })
        return a
      },
      getGoodsSelected(state){
        var o={}
        state.car.forEach(item=>{
          o[item.id]=item.selected
        })
        return o
      },
      getGoodsCountAndTotal(state){
        var o={
          count:0,
          total:0
        } 
        state.car.forEach(item=>{
          if(item.selected){
            o.count+=item.count
            o.total+=item.price*item.count
          }
        })
        return o
      }
    }
})


Vue.http.options.root = 'http://www.liulongbin.top:3005'
Vue.http.options.emulateJSON=true

import moment from 'moment'
Vue.filter('dateFormat',function(datastr,pattern='YYYY-MM-DD'){
  return moment(datastr).format(pattern)
})


import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
// import{Header,Swipe,SwipeItem,Button,Lazyload} from 'mint-ui'
// Vue.use(Lazyload)
// Vue.component(Header.name,Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)


// 安装图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

var vm =new Vue({
  el:'#app',
  render:function(createElements){
    return createElements(app)
  },
  router,
  store  
})