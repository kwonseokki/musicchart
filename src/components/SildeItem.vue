<template>
    <div class="wrap_slides">
    
        <h3 class="head_title">{{season}} 에 어울리는 노래</h3>
    
        <vueper-slides class="no-shadow" :visible-slides="5" slide-multiple slide-imgae-inside :gap="3" :bullets="false" :slide-ratio="1 / 5" :dragging-distance="200" :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }">
    
    
    
            <vueper-slide v-for="(i,j) in trackData" :key="j" :src="trackData[j].album.images[1].url" :image="trackData[j].album.images[1].url" @click="$router.push(`/listdetail/${j}`)" />
    
    
    
        </vueper-slides>
    
    
    
    </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';
export default {
    name: "SlideItem",
    data() {
        return {

        }
    },
    components: { VueperSlides, VueperSlide },
    props: {
        trackData: Object,
        season: String
    },
    methods: {
        goListDetail: () => { route.push('/myPage') }
    }
}
</script>

<style>
.vueperslides__arrow {color: #222}
.vueperslide__content-wrapper {box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;}
</style>