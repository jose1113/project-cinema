<template>
  <div class="complete">
    <b-container>
      <b-row>
        <b-col cols="6" sm="6" md="6" lg="6" xl="6">
          <b-navbar class="text-white">
            <p class="m-1" style="font-weight:500;">{{ $t('rede') }}</p>
            <a href="#">
              <img class="m-2" src="~/assets/logo-facebook.png" alt="Logotipo do Facebook">
              </a>
            <a href="#">
              <img src="~/assets/logo-instagram.png" alt="Logotipo do Instagram">
            </a>
            </b-navbar>
        </b-col>
        <b-col cols="6" sm="6" md="6" lg="6" xl="6">
          <b-navbar class="m-2 d-flex justify-content-end">
            <nuxt-link to="#" style="color:#B5121B; font-weight:600;">
              {{ $t('contrast') }}
            </nuxt-link>
          </b-navbar>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>
.complete{
  background-color: #c9c9c9;
}
img{
  width: 20px;
  height: 20px;
}
</style>
