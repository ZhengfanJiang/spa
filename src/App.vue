<template>
  <div id="app">
    <h1>App Header</h1>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/list">List</router-link>
    </div>
    <router-view/>
    <loading></loading>
  </div>
</template>

<script>
import Loading from './components/Loading'

export default {
  name: 'app',
  components: { Loading }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
