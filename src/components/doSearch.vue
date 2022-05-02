<template>

  <input type="text" @input="searchKeyword = $event.target.value">
  <input type="submit" value="test검색" @click="doSearch">
  
  <div v-for="(x,y) in getSearchData" :key="y" >
  
    <ul style="list-style:none">
      <li>{{getSearchData[y].name}}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name : 'doSearch',
    data() {
        return {
          getSearchData : [],
          searchKeyword : ""  
        }
    },

     mounted() {
    
  },

  methods : {
    doSearch() {
  let apiKey = "378bda961443f8868e2b26296c97edbf";
      axios.get(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${this.searchKeyword}&api_key=${apiKey}&format=json`)
      .then(res=> { 
      this.getSearchData = res.data.results.trackmatches.track;
      console.log(res.data.results.trackmatches.track[1])
      })
      .catch(err => {
        console.log(err);
      })
      .then(function(){
        // 항상실행
      })
    }
  }
}
</script>

<style>

</style>