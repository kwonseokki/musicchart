<template>
  
<transition name="showModal">
 <div class="modal-overlay start" v-if="modal==true">
  <div class="modal-contents">
    
    <img src="" alt="" style="width:300px; height:300px">
    <span>앨범명 : {{getChartData[clikIdx].name}}</span>
    <span>아티스트 : {{getChartData[clikIdx].artist.name}}</span>
    <span>재생수 : {{getChartData[clikIdx].playcount}}</span>
    <span>좋아요 : {{getChartData[clikIdx].listeners}}</span>
    <span @click="modal=false">닫기</span>
  </div>
</div>
</transition>




 <div class="container" >

      <h3 class="mb-5" style="text-align:left">해외노래 TOP{{limit}}🎙</h3>
  <select class="form-select" aria-label="Default select example" style="width:120px" @change="changeList($event);">
  <option value="10">TOP10</option>
  <option value="50">TOP50</option>
  <option value="100" selected>TOP100</option>
</select>

      <div class="table-responsive">

        <table class="table custom-table table-hover">
          <thead>
            <tr>
              <th scope="col">
                <label class="control control--checkbox">
                  <input type="checkbox" class="js-check-all"/>
                  <div class="control__indicator"></div>
                </label>
              </th>
              <th scope="col">순위</th>
              <th scope="col">곡정보</th>
              <th scope="col">재생수</th>
              <th scope="col">좋아요</th>
            </tr>
          </thead>
          <tbody>
        
            <tr v-for="(x,y) in getChartData" :key="y" @click="modal=true; clikIdx=y" v-show="y < limit">
         
              <th scope="row">
                <label class="control control--checkbox">
                  <input type="checkbox"/>
                  <div class="control__indicator"></div>
                </label>
              </th>
              <td >
                {{y+1}}
        
              </td>
              <td class="track_img">{{getChartData[y].name}}<br/><span style="font-size:0.8rem; color:lightgray">-{{getChartData[y].artist.name}}-</span></td>
              <td>
               
                <small class="d-block">{{regularNum(getChartData[y].playcount)}}</small>
              </td>
              <td>{{regularNum(getChartData[y].listeners)}}</td>
              <td>
            
              </td>
   
            </tr>
         
            
            
          </tbody>
        </table>
      </div>


    </div>
 
</template>

<script>
// import apiBoard from '@/api/board.js';
import axios from 'axios'
let apiKey = "378bda961443f8868e2b26296c97edbf";
export default {

    name : 'viewChart',
    data() {
        return {
            getChartData : [],
            modal : false,
            clikIdx : 0,
           limit : 100,
          
        }
    },
    computed : {
      regularNum() {
        return (params) => {
          return params.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
        }
      }
    },
   
      mounted() {
      
      axios.get(`https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&limit=${this.limit}&api_key=${apiKey}&format=json`)
      .then(res=> { 
      this.getChartData = res.data.tracks.track;
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
    changeList : function(e) {
      console.log(e.target.value)
      let targetIdx = e.target.value;
      this.limit = targetIdx 
    }
  }
}
</script>

<style>
.track_img img {width:120px; height:80px;}
.modal-overlay {
  width:40%; 
  height:100%; 
  position:fixed; 
  background:rgba(0, 0, 0, 0.8);
  right:0;
  }

.showModal-enter-from {right:-1000px;}
.showModal-enter-active {transition:all 0.7s;}
.showModal-enter-to {right:0;}

.showModal-leave-from {right:0px;}
.showModal-leave-active {transition:all 0.7s;}
.showModal-leave-to {right:-1000px;}

.modal-overlay {display:flex; align-items:center; justify-content:center;}
.modal-contents {
      display: flex;
    height: 60%;
    color: #ffffff;
    flex-direction: column;
    justify-content: space-around;
    align-items:center;
    
}
</style>