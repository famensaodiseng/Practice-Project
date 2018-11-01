//入口文件
import Vue from "vue"

import VueRouter from "vue-router"

Vue.use(VueRouter)

import 'mint-ui/lib/style.min.css'
import './lib/mui/css/mui.css'
import {  Header} from 'mint-ui'

// Vue.use(MintUI)

Vue.component(Header.name, Header)

// 1.3导入自己的router
import router from './router.js'

import { Swipe, SwipeItem } from 'mint-ui'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

import VueResource from 'vue-resource'
// 2.2 安装vue-resource
Vue.use(VueResource)

//导入app的跟组件   
import app from "./App.vue" 
var vm = new Vue ({
    el:'#app',
    render: c => c(app),
    router
})