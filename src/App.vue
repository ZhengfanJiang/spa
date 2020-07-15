<template>
  <div id="app" >
    <h1 @click="backtoHomePage" class="app-header">Jeffery Jiang</h1>
    <router-view/>
    <loading></loading>
  </div>
</template>

<script>
import Loading from './components/Loading'

export default {
  name: 'app',
  components: { Loading },
  methods: {
    backtoHomePage () {
      this.$router.push('/')
    }
  }
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
.app-header {
  &:hover {
    color:darkgray;
    cursor: pointer;
  }
}
html, body {
  height: 100%;
}

</style>
