<template>
    <nav class="nav_side">
    
        <div class="nav_logo">
    
            MUSIC CHART
    
        </div>
    
        <ul class="wrap_menu">
    
            <li v-for="(x,y) in menuData" :key="y" @click="$router.push(menuData[y].url)">{{menuData[y].name}}</li>
    
        </ul>
    
    
    
    </nav>
</template>

<script>
import menuData from '@/assets/urls/menudata.js'
export default {
    name: "SideMenu",

    data() {
        return {
            menuData: menuData
        }
    }
}
</script>

<style>

</style>