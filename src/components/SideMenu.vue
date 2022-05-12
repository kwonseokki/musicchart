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
    name : "SideMenu",

    data() {
        return{
         menuData : menuData
        }
    }
}
</script>

<style>
.nav_side {height:100%; position:fixed; background:#282828; left:0; width:15%; z-index:100;}
.nav_logo {height:100px; line-height:100px;}
.wrap_menu {padding:0; margin:0;}
.wrap_menu li {height:50px; line-height:50px; cursor:pointer; transition:all 0.2s;}
.wrap_menu li:hover {background:#1A1A1A;}
</style>