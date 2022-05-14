<template>
  <div class="container">
  <h3 class="head_title">title</h3>
<vueper-slides
  class="no-shadow"
  :visible-slides="5"
  slide-multiple
  :gap="3"
  :slide-ratio="1 / 5.5"
  :dragging-distance="200"
  :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }">
    
  <vueper-slide v-for="(i,j) in trackData" :key="j" :src="trackData[j].album.images[1].url" :style="{'background-image':`url(${trackData[j].album.images[1].url})`}"/>

</vueper-slides>

</div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';
export default {
    name : "SlideItem",
    data() {
        return {
          
        }
    },
     components: { VueperSlides, VueperSlide,},
                props : {
    trackData : Object
  }
}
</script>

<style>
.vueperslide__content-wrapper {background:transparent;}
</style>