<i18n>
{
  "en": {
    "titleFilm": "Stowaway",
    "feature": "Science fiction",
    "sinopse": "In Accidental Passenger, a stranger (Shamier Anderson) on board accidentally does serious damage to the ship's life support systems on a mission to Mars. With scarce resources, the medical researcher (Anna Kendrick) is the only voice against the clinical logic of the commander (Toni Collette) and the ship's biologist (Daniel Dae Kim)."
  },
  "es": {
    "titleFilm": "Pasajero accidental",
    "feature": "Ciencia ficción",
    "sinopse": "En Accidental Passenger, un extraño (Shamier Anderson) a bordo accidentalmente daña gravemente los sistemas de soporte vital del barco en una misión a Marte. Con escasos recursos, la investigadora médica (Anna Kendrick) es la única voz en contra de la lógica clínica del comandante (Toni Collette) y del biólogo del barco (Daniel Dae Kim)."
  },
  "pt-br": {
    "titleFilm": "Passageiro acidental",
    "feature": "Ficção científica",
    "sinopse": "Em Passageiro Acidental, um estranho (Shamier Anderson) a bordo acidentalmente causa um dano sério aos sistemas de suporte à vida da nave numa missão com destino a Marte. Com recursos escassos, a médica pesquisadora (Anna Kendrick) é a única voz contra a lógica clínica da comandante (Toni Collette) e do biólogo da nave (Daniel Dae Kim)."
  }
}
</i18n>
<template>
  <div>
    <img src="~/assets/passageiro-acidental-horizontal.png" alt="Cartaz Passageiro acidental" class="w-100">
    <b-container class="mt-3">
      <h1 style="font-weight: bold;">{{ $t('titleFilm') }} <b-badge variant="light" style="border: 1px solid black; font-size: 15px; color: purple;">{{ $t('feature') }}</b-badge></h1>
      <p>2021 | <b-badge style="padding:7px; background-color: orange;">14</b-badge> | 1h 56min</p>
    </b-container>
    <b-container>
      <b-row>
        <b-col cols="12" sm="12" md="12" lg="6" xl="6">
          <h3 style="font-weight: bold;">{{ $t('sinopseTitle') }}</h3>
          <p class="mt-2 text-justify">{{ $t('sinopse') }}</p>
        </b-col>
        <b-col cols="12" sm="12" md="12" lg="6" xl="6">
          <div class="d-flex justify-content-center">
            <iframe width="506" height="303" src="https://www.youtube.com/embed/FD_8G3sAKRI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="elenco rounded">
      <h4 class="text-center text-white mt-3 p-2">{{ $t('elenco') }}</h4>
      <b-row class="text-center">
          <b-col cols="6" sm="6" md="6" lg="3" xl="3">
            <nuxt-link to="/actor-anna-kendrick" class="actor">
              <b-avatar src="~/assets/actor-anna-kendrick.jpg" size="100px" style="border: 1px solid white;"></b-avatar>
              <p class="mt-2 text-white"><strong>Anna Kendrick</strong></p>
              <p style="color: white; font-size: 15px;">{{ $t('character') }} Zoe Levenson</p>
            </nuxt-link>
          </b-col>
          <b-col cols="6" sm="6" md="6" lg="3" xl="3">
            <nuxt-link to="/actor-toni-collette" class="actor">
              <b-avatar src="~/assets/actor-toni-collette.jpg" size="100px" style="border: 1px solid white;"></b-avatar>
              <p class="mt-2 text-white"><strong>Toni Collette</strong></p>
              <p style="color: white; font-size: 15px;">{{ $t('character') }} Marina Barnett</p>
            </nuxt-link>
          </b-col>
          <b-col cols="6" sm="6" md="6" lg="3" xl="3">
            <nuxt-link to="/actor-daniel-dae-kim" class="actor">
              <b-avatar src="~/assets/actor-daniel-dae-kim.jpg" size="100px" style="border: 1px solid white;"></b-avatar>
              <p class="mt-2 text-white"><strong>Daniel Dae Kim</strong></p>
              <p style="color: white; font-size: 15px;">{{ $t('character') }} David Kim</p>
            </nuxt-link>
          </b-col>
          <b-col cols="6" sm="6" md="6" lg="3" xl="3">
            <nuxt-link to="/actor-shamier-anderson" class="actor">
              <b-avatar src="~/assets/actor-shamier-anderson.jpg" size="100px" style="border: 1px solid white;"></b-avatar>
              <p class="mt-2 text-white"><strong>Shamier Anderson</strong></p>
              <p style="color: white; font-size: 15px;">{{ $t('character') }} Michael Adams</p>
            </nuxt-link>
          </b-col>
        </b-row>
    </b-container>
  </div>
</template>
<style scoped>
.elenco{
  background-image: linear-gradient(to right bottom, #252525, #3f2942, #6b1f4a, #960037, #af0404);
}
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
