import Vue from 'vue'
import app from './App.vue'

//导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'

import VueResource from 'vue-resource'
Vue.use(VueResource)
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
  router  
})