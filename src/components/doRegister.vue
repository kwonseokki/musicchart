<template>
<h3>회원가입</h3>
  <div class="col-md-4 mx-auto align-self-center top100 login-container">
  <form class="container mt-4">
  <div class="mb-3 text-start">
      <div class="mb-3 text-start">
    <label for="exampleInputPassword1" class="form-label">닉네임</label>
    <input type="text" class="form-control radius20" id="exampleInputPassword1" v-model="pwLength" @input="lengthCheck">
    <div id="emailHelp" class="form-text" style="height:16px"></div>
  </div> 
    <label for="exampleInputEmail1" class="form-label ">아이디 </label>
    <input type="text" class="form-control radius20" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="idLength" @input="lengthCheck">
    <div id="emailHelp" class="form-text" style="height:16px"></div>
  </div>
  <div class="mb-3 text-start">
    <label for="exampleInputPassword1" class="form-label">비밀번호</label>
    <input type="password" class="form-control radius20" id="exampleInputPassword1" v-model="pwLength" @input="lengthCheck">
    <div id="emailHelp" class="form-text" style="height:16px"></div>
  </div>
  <div class="mb-3 form-check">
  </div>
  <button type="submit" class="btn btn-primary radius20">회원가입</button><br/>
</form>
</div>
</template>

<script>
export default {
    name : 'doRegister',
    data() {
        return {

        }
    }
}
</script>

<style>

</style>