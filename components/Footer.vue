<template>
  <footer class="text-white rounded-top">
    <hr class="container">
    <b-container>
      <b-row class="text-center d-flex align-items-center">
        <b-col cols="4" sm="4" md="4" lg="4" xl="4">
          <b-navbar-brand href="/">
            <img src="~/assets/logo.png" alt="Logotipo" class="logo">
          </b-navbar-brand>
        </b-col>
        <b-col cols="4" sm="4" md="4" lg="4" xl="4">
          <nuxt-link to="#" class="text-white mr-5" style="font-weight:600;">{{ $t('lancamentos') }}</nuxt-link>
          <nuxt-link to="#" class="text-white" style="font-weight:600;">{{ $t('comingSoon') }}</nuxt-link>
        </b-col>
      </b-row>
      <hr class="container w-50 bg-white">
      <b-row class="text-center">
        <b-col class="container w-50" cols="6" sm="6" md="6" lg="6" xl="6">
          <nuxt-link to="#" class="container text-white">
            <b-nav-text>Cinema</b-nav-text>
          </nuxt-link>
        </b-col>
        <b-col class="container" cols="6" sm="6" md="6" lg="6" xl="6">
            <b-nav-text>Copyright © 2021</b-nav-text>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<style scoped>
img{
  width: 100px;
  height: 100px;
}
footer{
  bottom: 0;
  background-image: linear-gradient(to right bottom, #414141, #4f4f4f, #5d5d5d, #6d6b6c, #7c7a7a);
}
.logo{
  width: 100px;
  height: 100px;
}
@media(max-width:576px){
  .logo{
    width: 80px;
    height: 80px;
  }
}
</style>
