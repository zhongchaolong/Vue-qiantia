//1.1 导入vue第三方包
import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//1.2 导入与vue无关的第三方包 默认初始化样式  和自己写的全局样式
import 'normalize.css'
import axios from 'axios'

import './less/index.less'
import './css/style.css'

//1.3 导入自己写的模块  根模块 路由模块  API模块
import App from './App'
import router from './router'
import api from'./js/api-config.js'

// 1.4 统一use启动vue插件
Vue.use(Vuex)
Vue.use(ElementUI)

// 1.5 统一添加配置
//域名配置. 一配置, 以后所有的请求就会自动使用这个域名
axios.defaults.baseURL = 'http://localhost:8899' 
//安全机制,如果是跨域请求, 浏览器是不会把本地cookie信息携带过去的
axios.defaults.withCredentials = true
// 统一扩展Vue原型  加到原型，方便组件使用
Vue.prototype.$http = axios
Vue.prototype.$api = api

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
