<template>
    <div class="container-mode-pc">
    
        <div class="container-item">
    
            <div class="top100-p"></div>
    
            <div class="top60-p"></div>
    
            <h2 class="home_head_title">음악 추천</h2>
    
    
    
            <SlideItem :trackData="trackData" :season="season" />
    
    
    
        </div>
    
    </div>
</template>

<script>
// import apiBoard from '@/api/board.js';
import SlideItem from './SildeItem.vue'


export default {

    name: 'viewChart',
    data() {
        return {
            modal: false,
            slides: [{
                title: 'Slide #1',
                content: 'Slide content.',
                src: 'img'
            }],

        }
    },

    components: { SlideItem },

    methods: {

    },
    props: {
        trackData: Object,
        season: String
    }
}
</script>

<style>

</style>