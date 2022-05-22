<template>
    
    <router-view  :trackData="trackData" :chartData="chartData" :chartData2="this.chartData2" @sendName="getName=$event; getChart(getName, access_token)">
    </router-view>
</template>

<script>
import ListDetail from './components/ListDetail.vue';
import ListChart from './components/ListChart.vue';

import axios from 'axios';
import { Buffer } from 'buffer';

export default {
    
    name: 'App',
    data() {
        return {
            loginStatus: false,
            trackData: [],
            access_token: "",
            chartData: [],
            chartData2: [],
            getName: ""
        }
    },
    components: {
        ListDetail,
        ListChart,
 
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
      
      
    
       const client_id = process.env.VUE_APP_SPOTIFY_ID;
       const client_secret = process.env.VUE_APP_SPOTIFY_SECRET;

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

            axios({
            url: "http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=378bda961443f8868e2b26296c97edbf&format=json",
        }).then((res) => {
         this.chartData = res.data.tracks.track;
        }).catch((err)=>{
            console.log(err);
        })

    
        getSpotifyData()
    },

  
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
    background:#F9FBFD;
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
