<template>
<<<<<<< HEAD
  <!-- <nav class="navbar navbar-dark fixed-top" id="navbar">
=======
  <nav class="navbar navbar-dark fixed-top" id="navbar">
>>>>>>> 5660202dc19e7cabd32ae26a4d813ea1b46f4127
  <div class="container-fluid">
    <a class="navbar-brand" href="#" @click="$router.push('/')">Chart Now</a>
    <button class="nav-toggle navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="side-nav offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
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
            <div v-if="loginStatus==true"><img :src="userInfo.picture" alt="" class="user_picture"><span>{{userInfo.name}}님</span>|<span @click="logOut">로그아웃</span></div>
          </li>
          </div>
        </ul>
      
      </div>
    </div>
  </div>
<<<<<<< HEAD
</nav> -->
<span></span>
=======
</nav>
>>>>>>> 5660202dc19e7cabd32ae26a4d813ea1b46f4127
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
<<<<<<< HEAD
       
=======
        toggleMenu : function() {
            let tabMenu = document.querySelector('.offcanvas-end');
            let tabMenuOverlay = document.querySelector('.offcanvas-backdrop');
            
            tabMenu.classList.remove("show");
            tabMenuOverlay.classList.remove("show");
        },
>>>>>>> 5660202dc19e7cabd32ae26a4d813ea1b46f4127
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
.user_picture {width:25px; height:25px; border-radius:50%;}
<<<<<<< HEAD

=======
>>>>>>> 5660202dc19e7cabd32ae26a4d813ea1b46f4127
</style>