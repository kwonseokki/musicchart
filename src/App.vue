<template>

<router-view name="header"  :loginStatus="loginStatus" :userInfo="userInfo" @logOut="loginStatus=false"></router-view>
<router-view name="sidemenu"></router-view>
<router-view :loginStatus="loginStatus"  @login="loginStatus=true" :userInfo="userInfo"></router-view>
</template>

<script>
import ViewHeader from './components/ViewHeader.vue'
import myPage from './components/myPage.vue'
import SideMenu from './components/SideMenu.vue'
import axios from 'axios'
import {Buffer} from 'buffer'
export default {
  name: 'App',
  data() {
    return {
     loginStatus:false,
     userInfo : JSON.parse(localStorage.getItem("userInfo")),
     
    }
  },
  components: {
    ViewHeader,
    myPage,
    SideMenu,
    myPage
  },
  methods : {
   
  },
   mounted() {
    
           var client_id = '9fc19abe18d042a8b7b039d7bfc6d6cc';
        var client_secret = 'e64adcc5ba4b416a8e207a6637a8a380';
        
         axios({
        url: 'https://accounts.spotify.com/api/token',
        method: 'post',
        data: 
           'grant_type=client_credentials'
        ,
        headers: {
          'Accept':'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
        },
        auth: {
          username: client_id,
          password: client_secret
        }
      }).then(function(response) {
          console.log(response);
      }).catch(function(error) {
        console.log(error)
      });
    
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
