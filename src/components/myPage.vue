<template>
  마이페이지 나올곳
    <div v-if="loginStatus == true">
  <router-view></router-view>
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
            loginStatus : false
        }
    }
}
</script>

<style>

</style>