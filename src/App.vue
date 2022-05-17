<template>
    <router-view name="sidemenu">
    
    
    
    </router-view>
    
    <router-view :loginStatus="loginStatus" :trackData="trackData" :userInfo="userInfo" :season="this.season" :chartData="chartData" :chartData2="this.chartData2" @login="loginStatus=true" @sendName="getName=$event; getChart(getName, access_token)">
  
    </router-view>
</template>

<script>
import myPage from './components/myPage.vue';
import SideMenu from './components/SideMenu.vue';
import ListDetail from './components/ListDetail.vue';
import ListChart from './components/ListChart.vue';
import axios from 'axios';
import { Buffer } from 'buffer';
import {Test} from './api/chart.js'



export default {
    
    name: 'App',
    data() {
        return {
            loginStatus: false,
            userInfo: JSON.parse(localStorage.getItem("userInfo")),
            trackData: [],
            season: "",
            access_token: "",
            chartData: [],
            chartData2: [],
            getName: ""
        }
    },
    components: {
        myPage,
        SideMenu,
        myPage,
        ListDetail,
        ListChart
    },
    methods: {
      /* getName : 트랙이름, getaccess_token : acces_token */
        getChart: function(getName, getaccess_token) {

            let access_token = getaccess_token; // 토큰저장

            axios({
                url: 'https://api.spotify.com/v1/search',
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `Bearer ${access_token}`
                },
                params: {
                    "q": getName,
                    "type": "track",
                    "limit": "1"
                }
            }).then(res => {
                console.log(res.data.tracks.items);
                this.chartData2 = res.data.tracks.items;

            }).catch(err => {
                console.log(err);
            })

        }
    },
   
    created() {
      
         Test.methods.doTest()
        if (window.$cookies.isKey("accesToken")) {
            this.loginStatus = true
        }

       const client_id = process.env.VUE_APP_SPOTIFY_ID;
       const client_secret = process.env.VUE_APP_SPOTIFY_SECRET;

        const date = new Date();
        let season = date.getMonth();

        if (season > 11 || season < 3) this.season = "겨울";
        else if (season < 12 && season > 8) this.season = "가을";
        else if (season < 9 && season > 5) this.season = "여름";
        else if (season > 2 && season < 6) this.season = "봄";


        const getSpotifyData = async () => {
            await axios({
                url: 'https://accounts.spotify.com/api/token',
                method: 'POST',
                data: 'grant_type=client_credentials',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
                },
                auth: {
                    username: client_id,
                    password: client_secret
                }
            }).then((res) => {
                var access_token = res.data.access_token; // 토큰값 담은 변수
                lelayToken(access_token);
                this.access_token = access_token;
            }).catch(function(err) {
                console.log(err)
            });
        }


        const lelayToken = (getAccessToken) => {
            let access_token = getAccessToken;
            axios({
                url: 'https://api.spotify.com/v1/search',
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `Bearer ${access_token}`
                },
                params: {
                    "q": "봄",
                    "q": "사랑",
                    "type": "track",
                    "limit": "30"
                }
            }).then(res => {
                return this.trackData = res.data.tracks.items;
            }).catch(function(err) {
                console.log(err);
            })
        }

    
    
        getSpotifyData()
        //axios끼리 값을 어케넘기지
        //함수매개변수로 넘기기?
        //아니면 axios내의 다른기능 찾기?
        //어세스토큰 을 받고 리턴 
    },
  mixins : [Test],
  
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
    background: linear-gradient(to bottom right, #121212, #282828);
    min-height: 100vh;
}

.menu-body {
    position: relative;
}

.login-box {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%);
}
</style>
