<template>
    <div v-if="$route.params.pageNum">
    
        <div class="container-mode-pc">
    
            <div class="container-item wrap_album_info">
    
                <div class="album_info top100">
    
                    <img class="album_info_image" :src="trackData[$route.params.pageNum].album.images[1].url" alt="">
    
                    <p class="album_info_detail">
    
                        <h6>ALBUM INFORMATION</h6>
    
                        <h1>{{trackData[$route.params.pageNum].album.name}}</h1>
    
                        <span>{{trackData[$route.params.pageNum].artists[0].name}}</span>
    
                    </p>
    
                </div>
    
            </div>
    
        </div>
    
    </div>
</template>

<script>
export default {
    name: "ListDetail",
    data() {
        return {

        }
    },
    props: {
        trackData: Object
    },
    methods: {

    }
}
</script>

<style>

</style>