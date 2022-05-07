<template>
  <nav class="navbar navbar-light bg-light fixed-top" >
  <div class="container-fluid">
    <a class="navbar-brand" href="#" @click="$router.push('/')">Chart Now</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Chart Now</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body menu-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li v-for="(x,y) in menuData" :key="y" class="nav-item" @click="toggleMenu">
            <a class="nav-link active" aria-current="page" href="#" @click="$router.push(menuData[y].url)">{{menuData[y].name}}</a>
          </li>
          <div class="login-box">
           <li class="nav-item">
            <a v-if="loginStatus==false" class="nav-link" href="#"    @click="this.$router.push({path:'/login'});">로그인</a>
            <div v-if="loginStatus==true"><span>{{userInfo.name}}님</span>|<span @click="logOut">로그아웃</span></div>
          </li>
          </div>
        </ul>
      
      </div>
    </div>
  </div>
</nav>
</template>

<script>
import menuData from '@/assets/urls/menudata.js'
export default {
    name : 'ViewHeader',
    data(){
        return {
          menuData : menuData,
        }
    },
    methods : {
        toggleMenu : function() {
            let tabMenu = document.querySelector('.offcanvas-end');
            let tabMenuOverlay = document.querySelector('.offcanvas-backdrop');
            
            tabMenu.classList.remove("show");
            tabMenuOverlay.classList.remove("show");
        },
        logOut : function() {
          window.$cookies.remove("accesToken");
          this.$emit("logOut", false)
           this.$router.push('/')
        }
    },
   computed : {
     
   },
    props : {
      loginStatus:Boolean,
      userInfo:Object
    }

}
</script>

<style>

</style>