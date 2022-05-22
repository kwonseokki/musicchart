<template>
  
    <div class="wrap_track_list">

     <div class="view_track_detail">
   <div class="search_box">
       <input type="text" name="" id=""><button>검색</button>
   </div>

        <div v-if="chartData2[0]">
           <div class="track_detail_flex">
     <img :src="chartData2[0].album.images[1].url" alt="" class="track_detail_img">

     <div class="track_info_txt">
            <p>title : {{chartData2[0].name}}</p>
    
            <p>artist : {{chartData2[0].artists[0].name}}</p>
    </div>
           </div>
   </div>

<!--트랙 정보 없을때-->
           <div v-if="!(chartData2[0])">
           <div class="track_detail_flex">
     <img alt="" style="width:300px; height:300px" class="track_detail_img">

     <div class="track_info_txt">
            <p>title : any title</p>
    
            <p>artist : any aritist</p>
    </div>
           </div>
   </div>


  </div>

    <div class="view_track_list">
        <li v-for="(x,y) in chartData" :key="y" @click="$emit('sendName', chartData[y].name)">{{chartData[y].name}}</li>
    </div>
       
    
    
    
    </div>
</template>

<script>
export default {
    name: "ListChart",
    data() {
        return {
            access_token: this.access_token
        }
    },
    props: {
        chartData: Object,
        chartData2: Array
    },


}
</script>

<style>

</style>