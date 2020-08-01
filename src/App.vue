<template>
  <div id="app">
    <!-- <Flag /> -->
    <Main />
  </div>
</template>

<script>
// import Flag from './components/Flag.vue'
import Main from './components/Main.vue'

export default {
  name: 'App',
  // data: () => {
  //   return {
  //     msg: "Test Message"
  //   }
  // },
  components: {
    Main
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 15px;
}
</style>
