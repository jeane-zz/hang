<template>
  <div >
    <h2>hello router</h2>
    <p>
      <router-link to="/home">go to home</router-link>
      <router-link to="/login">go to login</router-link>
      <router-link to="/news">go to news</router-link>
    </p>
    <router-view></router-view> 
  </div>
</template>

<script>
// import home from './components/home'
// import news from './components/news'
// import login from './components/login'



export default {
  name: 'app',
  // router,
  // render: h => h(app)
  // nums:[3,5,2,8],
  // components: {
  //   // home,
  //   // news,
  //   // login
  // }
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
</style>
