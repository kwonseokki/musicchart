<template>
<router-view name="header"  :loginStatus="loginStatus" :userInfo="userInfo" @logOut="loginStatus=false"></router-view>
<router-view name="sidemenu"></router-view>
<router-view :loginStatus="loginStatus" :trackData="trackData"  @login="loginStatus=true" :userInfo="userInfo"></router-view>
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
     trackData : [] 
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
    
   
    
    },
    created() {
      if(window.$cookies.isKey("accesToken")) {
        this.loginStatus=true
      }

        let client_id = '9fc19abe18d042a8b7b039d7bfc6d6cc';
        let client_secret = 'e64adcc5ba4b416a8e207a6637a8a380';
        
     const getSpotifyData = async() => {
     await axios({
        url: 'https://accounts.spotify.com/api/token',
        method: 'POST',
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
      }).then(function(res) {
          // console.log(res.data.access_token);
          var access_token = res.data.access_token; // 토큰값 담은 변수
          lelayToken(access_token);
      }).catch(function(err) {
        console.log(err)
      });

       }
  

      const lelayToken = (getAccessToken) => {
        let access_token = getAccessToken;
          axios({
        url : 'https://api.spotify.com/v1/search',
        method : 'GET',
        headers : {
          'Accept':'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Bearer ${access_token}`
        },
        params : {
    "q": "2022",
    "type": "track",
    "limit": "30"
}
        }).then( res => {
        console.log(res.data.tracks.items);
       return this.trackData = res.data.tracks.items;
       
        }).catch(function(err){
          console.log(err);
        })
      }

  
getSpotifyData()
     

    //axios끼리 값을 어케넘기지
    //함수매개변수로 넘기기?
    //아니면 axios내의 다른기능 찾기?
    //어세스토큰 을 받고 리턴 
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
