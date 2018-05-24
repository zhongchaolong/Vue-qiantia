// 导入第三方包
import Vue from 'vue'
import Router from 'vue-router'

// 导入路由守卫
import beforeEach from './beforeEach.js'

// 导入被路由控制的组件
import Login from '@/components/login/login'
// 使用启动插件 路由插件 并添加路由守卫
Vue.use(Router)
Vue.use(beforeEach)

export default new Router({
  routes: [
    {name:"login",path:"/login",component:Login},
  ]
})
