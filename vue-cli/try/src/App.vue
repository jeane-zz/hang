<template>
  <div id="app">
    <header>这是头部</header>
    <router-link to="/">go to head</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import heads from './components/head'

export default {
  name: 'app',
  components: {
    heads,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
header {
  width: 100%;
  height: 200px;
  background: #897;
  border: 1px solid #ecc;
  }
</style>
