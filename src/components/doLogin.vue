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
    <div class="top10 google-login-btn" style="cursor:pointer" @click="googleSignIn">gmail 시작하기</div>
    
</form>
</div>
</template>

<script>
// Import the functions you need from the SDKs you need


import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjJIEnFanTQPt5iw5abjpQx8DleeevnwM",
  authDomain: "musicchart-7be4a.firebaseapp.com",
  databaseURL: "https://musicchart-7be4a-default-rtdb.firebaseio.com",
  projectId: "musicchart-7be4a",
  storageBucket: "musicchart-7be4a.appspot.com",
  messagingSenderId: "416789536358",
  appId: "1:416789536358:web:70856c98408e320b1d97a7",
  measurementId: "G-6LBVL257J2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




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
     created() {
        firebase.initializeApp(firebaseConfig);
    },
    mounted() {
       
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
     async googleSignIn() {
                console.log("login");
            const provider = new firebase.auth.GoogleAuthProvider();
            provider.setCustomParameters({
                prompt: "select_account",
            });
            const profile = await firebase.auth().signInWithPopup(provider);
            console.log(profile);
           console.log(profile.credential.accessToken);
             window.$cookies.set("accesToken", profile.credential.accessToken, 60*40);
             localStorage.setItem("userInfo", JSON.stringify(profile.additionalUserInfo.profile));
             this.$emit("login", true)
             this.$router.push('/')
            //  window.location.href='/'
        },
        
        
    }, 


}

</script>

<style>
.login-btn {pointer-events:none; background:#0040FF;}
.login-btn.activeBtn {pointer-events:auto; background:#0D6EFD;}
</style>