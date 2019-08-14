import Vue from 'vue'
import app from './App.vue'

//导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'

import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://www.liulongbin.top:3005'

import moment from 'moment'
Vue.filter('dateFormat',function(datastr,pattern='YYYY-MM-DD'){
  return moment(datastr).format(pattern)
})

import{Header,Swipe,SwipeItem} from 'mint-ui'
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)


var vm =new Vue({
  el:'#app',
  render:function(createElements){
    return createElements(app)
  },
  router  
})