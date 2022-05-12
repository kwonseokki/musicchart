<template>

<router-view name="header"  :loginStatus="loginStatus" :userInfo="userInfo" @logOut="loginStatus=false"></router-view>
<router-view name="sidemenu"></router-view>
<router-view :loginStatus="loginStatus"  @login="loginStatus=true" :userInfo="userInfo"></router-view>

</template>

<script>
import ViewHeader from './components/ViewHeader.vue'
import myPage from './components/myPage.vue'
import SideMenu from './components/SideMenu.vue'
export default {
  name: 'App',
  data() {
    return {
     limit:10,
     loginStatus:false,
     userInfo : JSON.parse(localStorage.getItem("userInfo")),
     
    }
  },
  components: {
    ViewHeader,
    myPage,
    SideMenu
  },
  methods : {
   
  },
   mounted() {
    
    
    },
    created() {
      if(window.$cookies.isKey("accesToken")) {
        this.loginStatus=true
        
      }
    }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  position: relative;
    background: linear-gradient(to bottom right, #121212,#282828);
  min-height:100vh;
}

.menu-body {position:relative;}
.login-box {position:absolute; bottom:10px; left:50%; transform:translate(-50%);}
</style>
