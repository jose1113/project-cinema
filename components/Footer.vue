<template>
  <footer class="text-white">
    <hr class="container">
    <b-nav class="container d-flex justify-content-center">
        <nuxt-link to="#" class="text-white mr-5">{{ $t('lancamentos') }}</nuxt-link>
        <nuxt-link to="#" class="text-white">{{ $t('comingSoon') }}</nuxt-link>
    </b-nav>
    <hr class="container w-50 bg-white">
    <div class="container w-50 d-flex align-items-center justify-content-between">
      <nuxt-link to="#" class="container text-white">
        <b-nav-text>Cinema</b-nav-text>
      </nuxt-link>
      <div class="container">
        <b-nav-text class="d-flex justify-content-end">Copyright © 2021</b-nav-text>
      </div>
    </div>
  </footer>
</template>

<style scoped>
img{
  width: 100px;
  height: 100px;
}
footer{
  bottom: 0;
  background-color: #414141;
}
</style>
