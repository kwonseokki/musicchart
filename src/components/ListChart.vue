<template>
    <div style="padding-top:100px">
    
        <div v-if="chartData2[0]">
    
            <p>{{chartData2[0].name}}</p>
    
            <p>{{chartData2[0].artists[0].name}}</p>
    
            <img :src="chartData2[0].album.images[1].url" alt="">
    
        </div>
    
        <li v-for="(x,y) in chartData" :key="y" @click="$emit('sendName', chartData[y].name)">{{chartData[y].name}}</li>
    
    
    
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
    }

}
</script>

<style>

</style>