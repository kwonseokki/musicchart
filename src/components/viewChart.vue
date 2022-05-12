<template>

<div class="item-container">
<div class="top100-p"></div>
<div class="top60-p"></div>
<h1>Track List</h1>
<SlideItem/>
<SlideItem/>
</div>



</template>

<script>

// import apiBoard from '@/api/board.js';



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
      // axios.get(``)
      // .then(res=> { 
      //   console.log(res);
      // })
      // .catch(err => {
      //   console.log(err);
      // })
      // .then(function(){
      //   // 항상실행
      // })
  },
  updated() {
    
  },
  
  methods : {
   
  }
}
</script>

<style>

.item-container {width:85%; position:absolute; right:0;}

</style>