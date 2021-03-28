<template>
  <footer>
    <hr class="container">
    <b-nav class="container">
      <b-nav-text>Filmes</b-nav-text>
        <nuxt-link to="#"><b-nav-item href="#1">Lançamentos</b-nav-item></nuxt-link>
        <nuxt-link to="#"><b-nav-item href="#1">Em breve</b-nav-item></nuxt-link>
    </b-nav>
    <hr class="container">
    <b-nav class="d-flex justify-content-center align-items-center">
      <nuxt-link to="/">
        <b-nav-item>
          <img src="~/assets/logo.png" alt="Logo do site">
        </b-nav-item>
      </nuxt-link>
      <b-nav-text>Copyright © 2021 Cinema</b-nav-text>
    </b-nav>
  </footer>
</template>

<style scoped>
img{
  width: 100px;
  height: 100px;
}
footer{
  bottom: 0;
}
</style>
