<template>
<div class="container">
  <h1 class="top100">제목으로 음악을 검색해주세요</h1>
<div class="input-group mb-3 top60">
  <input type="text" class="form-control radius20" @input="searchKeyword = $event.target.value" placeholder="음악을 검색해주세요" aria-label="Recipient's username" aria-describedby="basic-addon2">
  <div class="input-group-append ">
    <button class="btn btn-outline-secondary button-border" type="button" @click="doSearch">검색</button>
  </div>
</div>
  <h3 class="result_keyword top60">{{resultKeyword}}</h3>
 <div v-for="(x,y) in getSearchData" :key="y">
    <ul style="list-style:none">
      <li class="search_result" @click="goSite(getSearchData[y].url)">{{getSearchData[y].name}}</li>
    </ul>
  </div>
</div>
  
 
</template>

<script>
import axios from 'axios'
export default {
    name : 'doSearch',
    data() {
        return {
          getSearchData : [],
          searchKeyword : "" ,
          resultKeyword : "" 
        }
    },

     mounted() {
    
  },

  methods : {
    doSearch() {
      let apiKey = "378bda961443f8868e2b26296c97edbf";
      axios.get(`https://ws.audioscrobbler.com/2.0/?method=track.search&track=${this.searchKeyword}&api_key=${apiKey}&format=json`)
      .then(res=> { 
      this.getSearchData = res.data.results.trackmatches.track;
      this.resultKeyword = this.searchKeyword+"로 검색한 결과입니다.";
      console.log(this.getSearchData);
      })
      .catch(err => {
        console.log(err);
      })
      .then(function(){
        // 항상실행
      })
    },
    goSite : function(url) {
      window.open(url, '_blank'); 
    }
  }
}
</script>

<style>
.search_result {text-align:left; cursor:pointer;}
.search_result:hover {text-decoration:underline;}
.result_keyword {text-align:left;}
.button-border {border-radius:0 20px 20px 0; width:80px;}
</style>