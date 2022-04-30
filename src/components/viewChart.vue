<template>
  차트가 나올곳 입니다.
  <h3>api test</h3>
 
 <div v-for="(x,y) in apiTest" :key="x">

<img :src="apiTest[y].snippet.thumbnails.medium.url" alt="">
 </div>
</template>

<script>
// import apiBoard from '@/api/board.js';
import axios from 'axios'
export default {

    name : 'viewChart',
    data() {
        return {
            apiTest : []
        }
    },
      created() {
        
      axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q=kpop+music&maxResults=10&key=AIzaSyCymLqDRf75oTFZ7n0u0sv3DIaqZafP4i0')
      .then(res=> { 
       console.log(res);
      this.apiTest = res.data.items
      // .snippet.thumbnails.medium.url
      })
      .catch(err => {
        console.log(err);
      })
      .then(function(){
        // 항상실행
      })
  }
}
</script>

<style>

</style>