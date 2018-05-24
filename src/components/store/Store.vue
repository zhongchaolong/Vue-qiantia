<template>
  <div class="">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
// <!-- 导入头部和脚步组件 -->
import appFooter from './common/Footer.vue'
import appHeader from './common/Header'
// 使用es6语法注册组件
export default{
  components: {
    appFooter,
    appHeader,
  }
}
</script>

<style>

</style>