<template>
  <div>
      <img src="~/assets/a-escavacao-horizontal.jpg" alt="Cartaz A escavação" class="w-100">
    <b-container class="mt-3">
      <h1>A escavação <b-badge variant="light" style="border: 1px solid black; font-size: 15px; color: purple;">Drama</b-badge></h1>
      <p>2021 | <b-badge style="padding:7px; background-color: orange;">14</b-badge> | 1h 52min</p>
    </b-container>
    <b-container>
      <b-row>
        <b-col>
          <h3>Leia a sinopse</h3>
          <p class="mt-2 text-justify">A Escavação conta a história de um arqueólogo que embarca na escavação historicamente importante de Sutton Hoo, em 1938, onde um grupo descobre uma grande quantia de ouro em uma câmara mortuária de um navio enterrado. Baseado no livro de mesmo nome de John Preston e em uma história real.</p>
        </b-col>
        <b-col>
          <div class="d-flex justify-content-center">
            <iframe width="506" height="303" src="https://www.youtube.com/embed/rXoel44ZudM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <h4>Elenco</h4>
      <b-row class="text-center">
          <b-col>
            <nuxt-link to="/actor-ralph-fiennes" class="actor">
              <b-avatar src="~/assets/actor-ralph-fiennes.jpg" size="100px"></b-avatar>
              <p class="mt-2"><strong>Ralph Fiennes</strong></p>
              <p style="color: gray; font-size: 15px;">Personagem: Basil Brown</p>
            </nuxt-link>
          </b-col>
          <b-col>
            <nuxt-link to="/actor-carey-mulligan" class="actor">
              <b-avatar src="~/assets/actor-carey-mulligan.jpg" size="100px"></b-avatar>
              <p class="mt-2"><strong>Carey Mulligan</strong></p>
              <p style="color: gray; font-size: 15px;">Personagem: Edith Pretty</p>
            </nuxt-link>
          </b-col>
          <b-col>
            <nuxt-link to="/actor-lily-james" class="actor">
              <b-avatar src="~/assets/actor-lily-james.jpg" size="100px"></b-avatar>
              <p class="mt-2"><strong>Lily James</strong></p>
              <p style="color: gray; font-size: 15px;">Personagem: Peggy Preston</p>
            </nuxt-link>
          </b-col>
          <b-col>
            <nuxt-link to="/actor-arsher-ali" class="actor">
              <b-avatar src="~/assets/actor-arsher-ali.jpg" size="100px"></b-avatar>
              <p class="mt-2"><strong>Arsher Ali</strong></p>
              <p style="color: gray; font-size: 15px;">Personagem: William Grimes</p>
            </nuxt-link>
          </b-col>
        </b-row>
    </b-container>
  </div>
</template>
<style scoped>
h3{
  color: rgb(165, 35, 35);
}
.actor{
  text-decoration: none;
  color: black;
  line-height: 5px;
}
</style>
