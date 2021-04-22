<template>
  <div>
      <img src="~/assets/space-jam-horizontal.jpg" alt="Space Jam: um novo legado cartaz" class="w-100">
    <b-container class="mt-3">
      <h1>Space Jam: um novo legado <b-badge variant="light" style="border: 1px solid black; font-size: 15px; color: green;">Animação</b-badge></h1>
      <p>2021 | <b-badge variant="danger" style="padding:7px;">A definir</b-badge> | Duração não definida</p>
    </b-container>
    <b-container>
      <b-row>
        <b-col cols="12" sm="12" md="12" lg="6" xl="6">
          <h3>Leia a sinopse</h3>
          <p class="mt-2 text-justify">Em Space Jam: Um Novo Legado, a inteligência artificial, Al G (Dom Cheadle) sequestra o filho de Lebron James e envia o lendário jogador dos Los Angeles Lakers para uma realidade paralela, onde vivem apenas os personagens de desenho animado da Warner Bros. Para resgatar o seu filho, ele precisará vencer uma partida épica de basquete contra superversões digitais das maiores estrelas da história da NBA e da WNBA. Para essa dura missão, King James terá a ajuda de Pernalonga, Patolino, Lola Bunny, dentre outros personagens.</p>
          <p>Classificação indicativa a definir por <a href="http://www.culturadigital.br/classind">http://www.culturadigital.br/classind</a></p>
        </b-col>
        <b-col cols="12" sm="12" md="12" lg="6" xl="6">
          <div class="d-flex justify-content-center">
            <iframe width="590" height="444" src="https://www.youtube.com/embed/t1m7zl8H-kE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <h4 class="elenco">Elenco</h4>
      <b-row class="text-center">
          <b-col cols="6" sm="6" md="6" lg="3" xl="3">
            <nuxt-link to="/actor-lebron-james" class="actor">
              <b-avatar src="~/assets/actor-lebron-james.jpg" size="100px"></b-avatar>
              <p class="mt-2"><strong>Lebron James</strong></p>
              <p style="color: gray; font-size: 15px;">Personagem: LeBron James</p>
            </nuxt-link>
          </b-col>
          <b-col cols="6" sm="6" md="6" lg="3" xl="3">
            <nuxt-link to="/actor-don-cheadle" class="actor">
              <b-avatar src="~/assets/actor-don-cheadle.jpg" size="100px"></b-avatar>
              <p class="mt-2"><strong>Don Cheadle</strong></p>
              <p style="color: gray; font-size: 15px;">Personagem: AI G Rhythm</p>
            </nuxt-link>
          </b-col>
          <b-col cols="6" sm="6" md="6" lg="3" xl="3">
            <nuxt-link to="/actor-sonequa-martin-green" class="actor">
              <b-avatar src="~/assets/actor-sonequa-martin-green.jpg" size="100px"></b-avatar>
              <p class="mt-2"><strong>Sonequa Martin-Green</strong></p>
              <p style="color: gray; font-size: 15px;">Personagem: Kamiyah James</p>
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
@media(max-width:576px){
  .elenco{
    text-align: center;
    margin-top: 7px;
  }
  .text-center{
    display: flex;
    justify-content: center;
  }
}
@media(max-width:768px){
    .elenco{
    text-align: center;
    margin-top: 7px;
  }
  .text-center{
    display: flex;
    justify-content: center;
  }
}
@media(max-width:992px){
    .elenco{
    text-align: center;
    margin-top: 7px;
  }
  .text-center{
    display: flex;
    justify-content: center;
  }
}
</style>
