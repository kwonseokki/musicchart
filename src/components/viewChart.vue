<template>
<div class="top100-p"></div>

<SlideItem/>
<SlideItem/>
</template>

<script>

// import apiBoard from '@/api/board.js';
import axios from 'axios';
import {Buffer} from 'buffer';

import SlideItem from './SildeItem.vue'


export default {

    name : 'viewChart',
    data() {
        return {
            modal : false,
             slides: [
    {
      title: 'Slide #1',
      content: 'Slide content.'
    }
  ]
        }
    },
  
    components: {SlideItem },
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