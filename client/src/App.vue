<template>
  <div id="app">
    <div id="nav">
      <router-link class="navMenu" to="/">Home</router-link> |
      <router-link class="navMenu" to="/about">About</router-link> |
      <router-link class="navMenu" to="/signup">signUP</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>



<script>

import "@/assets/css/common.css"

export default {
  metaInfo : {

  },
  components : {

  },
  data : function(){
    return {}
  },

  methods : {

  }
}


</script>
