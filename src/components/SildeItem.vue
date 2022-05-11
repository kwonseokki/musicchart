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
  <vueper-slide v-for="i in 10" :key="i" :title="i.toString()" />
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
     components: { VueperSlides, VueperSlide,}
}
</script>

<style>

</style>