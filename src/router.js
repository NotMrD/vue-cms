import VueRouter from 'vue-router'
import HomeContainer from './components/Tabbar/HomeContainer.vue'
import MemberContainer from './components/Tabbar/MemberContainer.vue'
import ShopcarContainer from './components/Tabbar/ShopcarContainer.vue'
import SearchContainer from './components/Tabbar/SearchContainer.vue'
import newsList from './components/newscomponent/newsList.vue'
import newsInfo from './components/newscomponent/newsInfo.vue'
import photoList from './components/photos/photoList.vue'

var router= new VueRouter({
    routes:[//配置路由规则
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/shopcar',component:ShopcarContainer},
        {path:'/search',component:SearchContainer},
        {path:'/home/newslist',component:newsList},
        {path:'/home/newsinfo/:id',component:newsInfo},
        {path:'/home/photolist',component:photoList},
    ],
    linkActiveClass:'mui-active'//高亮类
})

export default router