<template>
  마이페이지 나올곳
    <div v-if="loginStatus == true">
      <img :src="userInfo.picture" alt=""><br/>
      name : {{userInfo.name}}<br/>
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

</style>