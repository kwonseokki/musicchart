<template>
  



</template>

<script>
// import apiBoard from '@/api/board.js';
import axios from 'axios';

export default {

    name : 'viewChart',
    data() {
        return {
            modal : false,
        }
    },
    computed : {
      
    },
   
      mounted() {
      
      axios.get(``)
      .then(res=> { 
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
      .then(function(){
        // 항상실행
      })
  },
  updated() {
    
  },
  
  methods : {
   
  }
}
</script>

<style>

</style>