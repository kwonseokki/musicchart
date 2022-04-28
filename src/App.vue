<template>
<nav class="navbar navbar-light bg-light fixed-top" v-if="loginMode == false">
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
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#" @click="$router.push('/')"> 차트</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="$router.push('/search')">음악검색</a>
          </li>
             <li class="nav-item">
            <a class="nav-link" href="#" @click="$router.push('/myPage')">마이페이지</a>
          </li>
          <div class="login-box">
           <li class="nav-item">
            <a class="nav-link" href="#"    @click="this.$router.push({path:'/login'});">로그인</a>
          </li>
          </div>
        </ul>
      
      </div>
    </div>
  </div>
</nav>

<router-view></router-view>


</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      loginMode : false
    }
  },
  components: {
 
  },
  methods : {
   
  },
   mounted() {
      console.log(this.loginMode)
    },
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.menu-body {position:relative;}
.login-box {position:absolute; bottom:10px; left:50%; transform:translate(-50%);}
</style>
