import VueRouter from 'vue-router'

import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf'
//导入对应的路由组件
import HomeContainer from "./components/tarbar/HomeContainer.vue";
import MemberContainer from "./components/tarbar/MemberContainer.vue";
import ShopcarContainer from "./components/tarbar/ShopcarContainer.vue";
import SearchContainer from "./components/tarbar/SearchContainer.vue";

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/home',component:HomeContainer},
    {path:'/search',component:SearchContainer},
    {path:'/shopcar',component:ShopcarContainer},
    {path:'/member',component:MemberContainer},
  ],
  linkActiveClass:'mui-active'
})

// 把路由对象暴露出去
export default router