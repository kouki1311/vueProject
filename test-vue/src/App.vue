<template>
  <div id="app">
    <img src="./assets/usa.png">
   <main>
    <router-view></router-view>
  </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  /* @import "./assets/css/main.css"; */
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
