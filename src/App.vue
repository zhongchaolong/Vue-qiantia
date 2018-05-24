<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html, body, #app {
      height: 100%;
  }

  a {
      text-decoration: none;
      color: #2a72c5;
  }
</style>
