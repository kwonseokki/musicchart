<template>
  <h2 class="top100-p">마이페이지</h2>
    <div v-if="loginStatus == true">
      <img :src="userInfo.picture" alt="" class="user_picture_big top30"><br/><br/>
      name : {{userInfo.name}}<br/><br/>
      verified : {{userInfo.verified_email}}
</div>
<div v-if="loginStatus == false">
    로그인이 필요한 페이지 입니다.
</div>
</template>

<script>
export default {
    name : 'myPage',
    data() {
        return {
            loginStatus : false,
        }
    },
    props : {
      loginStatus : Boolean,
      userInfo : Object
    }
}
</script>

<style>
.user_picture_big {border-radius:50%;}
</style>