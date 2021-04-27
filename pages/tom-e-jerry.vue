<template>
  <div>
      <img src="~/assets/tom-e-jerry-horizontal.jpg" alt="Cartaz Kong" class="w-100">
    <b-container class="mt-3">
      <h1>Tom e Jerry: o filme <b-badge variant="light" style="border: 1px solid black; font-size: 15px; color: green;">Animação</b-badge></h1>
      <p>2021 | <b-badge variant="success" style="padding:7px;">L</b-badge> | 1h 41min</p>
    </b-container>
    <b-container>
      <b-row>
        <b-col cols="12" sm="12" md="12" lg="6" xl="6">
          <h3>Leia a sinopse</h3>
          <p class="mt-2 text-justify">Adaptação dos desenhos, Tom e Jerry: O Filme mostra uma das rivalidades mais amadas da história que é reacendida quando Jerry se muda para o melhor hotel de Nova York na véspera do "casamento do século", forçando a desesperada organizadora do evento (Chloe Moretz) a contratar Tom para se livrar do rato. Mas logo surge um problema ainda maior: um funcionário diabolicamente ambicioso conspira contra os três. Uma combinação de animação clássica e live-action.</p>
        </b-col>
        <b-col cols="12" sm="12" md="12" lg="6" xl="6">
          <div class="d-flex justify-content-center">
            <iframe width="590" height="444" src="https://www.youtube.com/embed/Jg-ls07nixc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <h4 class="elenco">Elenco</h4>
      <b-row class="text-center d-flex justify-content-center">
          <b-col cols="6" sm="6" md="6" lg="3" xl="3">
            <nuxt-link to="/actor-chloe-grace-moretz" class="actor">
              <b-avatar src="~/assets/actor-chloe-grace-moretz.jpg" size="100px"></b-avatar>
              <p class="mt-2"><strong>Chloë Grace Moretz</strong></p>
              <p style="color: gray; font-size: 15px;">Personagem: Kayla</p>
            </nuxt-link>
          </b-col>
          <b-col cols="6" sm="6" md="6" lg="3" xl="3">
            <nuxt-link to="/actor-michael-pena" class="actor">
              <b-avatar src="~/assets/actor-michael-pena.jpg" size="100px"></b-avatar>
              <p class="mt-2"><strong>Michael Peña</strong></p>
              <p style="color: gray; font-size: 15px;">Personagem: Terrancey</p>
            </nuxt-link>
          </b-col>
          <b-col cols="6" sm="6" md="6" lg="3" xl="3">
            <nuxt-link to="/actor-camila-rutherford" class="actor">
              <b-avatar src="~/assets/actor-camila-rutherford.jpg" size="100px"></b-avatar>
              <p class="mt-2"><strong>Camilla Rutherford</strong></p>
              <p style="color: gray; font-size: 15px;">Personagem: Wealthy Woman</p>
            </nuxt-link>
          </b-col>
        </b-row>
        <Comentario />
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
@media(max-width:576px){
  .elenco{
    text-align: center;
    margin-top: 7px;
  }
}
@media(max-width:768px){
    .elenco{
    text-align: center;
    margin-top: 7px;
  }
}
</style>
