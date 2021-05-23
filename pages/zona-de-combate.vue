<i18n>
{
  "en": {
    "titleFilm": "Outside the Wire",
    "feature": "Science fiction",
    "sinopse": "In Combat Zone, drone pilot Harp (Damson Idris) is sent to a dangerous military zone. There, he must track down a device with great destructive power, under the supervision of officer Leo (Anthony Mackie), before the apparatus falls into the wrong hands. Harp soon discovers that Leo is different from his previous superiors in one essential aspect: he is an android. As the two try to fulfill the new mission together, Harp begins to suspect that Leo has other intentions. Is it possible that Leo is not the hero that everyone claims to be?"
  },
  "es": {
    "titleFilm": "Zona de combate",
    "feature": "Ciencia ficción",
    "sinopse": "En Combat Zone, el piloto de drones Harp (Damson Idris) es enviado a una zona militar peligrosa. Allí, debe rastrear un dispositivo con gran poder destructivo, bajo la supervisión del oficial Leo (Anthony Mackie), antes de que el aparato caiga en las manos equivocadas. Harp pronto descubre que Leo es diferente de sus superiores anteriores en un aspecto esencial: es un androide. Mientras los dos intentan cumplir la nueva misión juntos, Harp comienza a sospechar que Leo tiene otras intenciones. ¿Es posible que Leo no sea el héroe que todo el mundo dice ser?"
  },
  "pt-br": {
    "titleFilm": "Zona de combate",
    "feature": "Ficção científica",
    "sinopse": "Em Zona de Combate, o piloto de drone Harp (Damson Idris) é enviado para uma perigosa zona militar. Lá, ele deve rastrear um dispositivo com grande poder destrutivo, sob a supervisão do oficial Leo (Anthony Mackie), antes que o aparato caia nas mãos erradas. Harp logo descobre que Leo é diferente de seus superiores anteriores em um aspecto essencial: ele é um andróide. Enquanto os dois tentam cumprir, juntos, a nova missão, Harp começa a desconfiar que Leo tem outras intenções. É possível que Leo não seja o herói que todos afirmam ser?"
  }
}
</i18n>
<template>
  <div>
    <img src="~/assets/zona-de-combate-horizontal.png" alt="Cartaz Passageiro acidental" class="w-100">
    <b-container class="mt-3">
      <h1 style="font-weight: bold;">{{ $t('titleFilm') }} <b-badge variant="light" style="border: 1px solid black; font-size: 15px; color: purple;">{{ $t('feature') }}</b-badge></h1>
      <p>2021 | <b-badge style="padding:7px;" variant="dark">18</b-badge> | 1h 54min</p>
    </b-container>
    <b-container>
      <b-row>
        <b-col cols="12" sm="12" md="12" lg="6" xl="6">
          <h3 style="font-weight: bold;">{{ $t('sinopseTitle') }}</h3>
          <p class="mt-2 text-justify">{{ $t('sinopse') }}</p>
        </b-col>
        <b-col cols="12" sm="12" md="12" lg="6" xl="6">
          <div class="d-flex justify-content-center">
            <iframe width="506" height="303" src="https://www.youtube.com/embed/71QFeMSE3qU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="elenco rounded">
      <h4 class="text-center text-white mt-3 p-2">{{ $t('elenco') }}</h4>
      <b-row class="text-center">
          <b-col cols="6" sm="6" md="6" lg="3" xl="3">
            <nuxt-link to="/actor-anthony-mackie" class="actor">
              <b-avatar src="~/assets/actor-anthony-mackie.jpg" size="100px" style="border: 1px solid white;"></b-avatar>
              <p class="mt-2 text-white"><strong>Anthony Mackie</strong></p>
              <p style="color: white; font-size: 15px;">{{ $t('character') }} Leo</p>
            </nuxt-link>
          </b-col>
          <b-col cols="6" sm="6" md="6" lg="3" xl="3">
            <nuxt-link to="/actor-damson-idris" class="actor">
              <b-avatar src="~/assets/actor-damson-idris.jpg" size="100px" style="border: 1px solid white;"></b-avatar>
              <p class="mt-2 text-white"><strong>Damson Idris</strong></p>
              <p style="color: white; font-size: 15px;">{{ $t('character') }} Tenente Thomas Harp</p>
            </nuxt-link>
          </b-col>
          <b-col cols="6" sm="6" md="6" lg="3" xl="3">
            <nuxt-link to="/actor-enzo-cilenti" class="actor">
              <b-avatar src="~/assets/actor-enzo-cilenti.jpg" size="100px" style="border: 1px solid white;"></b-avatar>
              <p class="mt-2 text-white"><strong>Enzo Cilenti</strong></p>
              <p style="color: white; font-size: 15px;">{{ $t('character') }} Sargento Miller</p>
            </nuxt-link>
          </b-col>
          <b-col cols="6" sm="6" md="6" lg="3" xl="3">
            <nuxt-link to="/actor-emily-beecham" class="actor">
              <b-avatar src="~/assets/actor-emily-beecham.jpg" size="100px" style="border: 1px solid white;"></b-avatar>
              <p class="mt-2 text-white"><strong>Emily Beecham</strong></p>
              <p style="color: white; font-size: 15px;">{{ $t('character') }} Sofiya</p>
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
