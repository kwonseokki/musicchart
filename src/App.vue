<template>

<router-view name="header"></router-view>
<router-view></router-view>


</template>

<script>


export default {
  
  name: 'App',
  data() {
    return {
     
    }
  },
  components: {
    
  },
  methods : {
   
  },
   mounted() {
  
    },
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.menu-body {position:relative;}
.login-box {position:absolute; bottom:10px; left:50%; transform:translate(-50%);}
</style>
