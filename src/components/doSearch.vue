<template>
<div class="container" >
<div class=" top100 input-group mb-3">
  <input type="text" class="form-control" @input="searchKeyword = $event.target.value" placeholder="음악을 검색해주세요" aria-label="Recipient's username" aria-describedby="basic-addon2">
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="button" @click="doSearch">검색</button>
  </div>
</div>
</div>
  
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