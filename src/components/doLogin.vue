<template>
<div class="col-md-4 mx-auto align-self-center top100 login-container">
  <img src="../assets/logo.png" alt="">
  <form class="container mt-4">
  <div class="mb-3 text-start">
    <label for="exampleInputEmail1" class="form-label ">아이디</label>
    <input type="text" class="form-control radius20" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="idLength" @input="lengthCheck">
    <div id="emailHelp" class="form-text" style="height:16px">{{loginInfo[0]}}</div>
  </div>
  <div class="mb-3 text-start">
    <label for="exampleInputPassword1" class="form-label">비밀번호</label>
    <input type="password" class="form-control radius20" id="exampleInputPassword1" v-model="pwLength" @input="lengthCheck">
    <div id="emailHelp" class="form-text" style="height:16px">{{loginInfo[1]}}</div>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">로그인 기억</label>
  </div>
  <button type="submit" class="login-btn btn btn-primary radius20" :class="{activeBtn : loginActive==true}" @click="$router.push('/');">로그인</button><br/>
  <div class="top10" style="cursor:pointer" @click="$router.push('./register')">회원가입</div>
</form>
</div>
</template>

<script>
export default {
    name : 'doLogin',
    data() {
        return {
        idLength : "",
        pwLength : "",
        loginInfo : ["", ""],
        loginActive : false,
        
        }
    },
    props : {
        loginMode : Boolean
    },
    methods : {
         lengthCheck : function() {
       if(this.idLength.length >= 8) {
           this.loginInfo[0] = "적절한 아이디 입니다✔"
           if(this.pwLength.length >= 8) {
                this.loginInfo[1] = "적절한 비밀번호 입니다.✔"
                return this.loginActive = true
           }
       }
    },
    },
    mounted() {
        
    },
}

</script>

<style>

.login-btn {pointer-events:none; background:#0040FF;}
.login-btn.activeBtn {pointer-events:auto; background:#0D6EFD;}
</style>