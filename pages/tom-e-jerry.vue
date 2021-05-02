<i18n>
{
  "en": {
    "titleFilm": "Tom and Jerry: the movie",
    "feature": "Animation",
    "sinopse": "Adaptation of the drawings, Tom and Jerry: The film shows one of the most beloved rivalries in history that is rekindled when Jerry moves to the best hotel in New York on the eve of the 'wedding of the century', forcing the desperate organizer of the event (Chloe Moretz ) to hire Tom to get rid of the mouse. But an even bigger problem soon arises: a devilishly ambitious employee conspires against the three. A combination of classic animation and live-action."
  },
  "es": {
    "titleFilm": "Tom e Jerry: la película",
    "feature": "Animación",
    "sinopse": "Adaptación de los dibujos, Tom y Jerry: La película muestra una de las rivalidades más queridas de la historia que se reaviva cuando Jerry se traslada al mejor hotel de Nueva York en vísperas de la 'boda del siglo', lo que obliga al desesperado organizador de el evento (Chloe Moretz) para contratar a Tom para deshacerse del ratón. Pero pronto surge un problema aún mayor: un empleado endiabladamente ambicioso conspira contra los tres. Una combinación de animación clásica y acción en vivo."
  },
  "pt-br": {
    "titleFilm": "Tom e Jerry: o filme",
    "feature": "Animação",
    "sinopse": "Adaptação dos desenhos, Tom e Jerry: O Filme mostra uma das rivalidades mais amadas da história que é reacendida quando Jerry se muda para o melhor hotel de Nova York na véspera do 'casamento do século', forçando a desesperada organizadora do evento (Chloe Moretz) a contratar Tom para se livrar do rato. Mas logo surge um problema ainda maior: um funcionário diabolicamente ambicioso conspira contra os três. Uma combinação de animação clássica e live-action."
  }
}
</i18n>
<template>
  <div>
      <img src="~/assets/tom-e-jerry-horizontal.jpg" alt="Cartaz Kong" class="w-100">
    <b-container class="mt-3">
      <h1 style="font-weight: bold;">{{ $t('titleFilm') }} <b-badge variant="light" style="border: 1px solid black; font-size: 15px; color: green;">{{ $t('feature') }}</b-badge></h1>
      <p>2021 | <b-badge variant="success" style="padding:7px;">L</b-badge> | 1h 41min</p>
    </b-container>
    <b-container>
      <b-row>
        <b-col cols="12" sm="12" md="12" lg="6" xl="6">
          <h3>{{ $t('sinopseTitle') }}</h3>
          <p class="mt-2 text-justify">{{ $t('sinopse') }}</p>
        </b-col>
        <b-col cols="12" sm="12" md="12" lg="6" xl="6">
          <div class="d-flex justify-content-center">
            <iframe width="590" height="444" src="https://www.youtube.com/embed/Jg-ls07nixc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="elenco rounded">
      <h4 class="text-center text-white mt-3 p-2" style="font-weight: 500;">{{ $t('elenco') }}</h4>
      <b-row class="text-center d-flex justify-content-center rounded p-3">
          <b-col cols="6" sm="6" md="6" lg="3" xl="3">
            <nuxt-link to="/actor-chloe-grace-moretz" class="actor">
              <b-avatar src="~/assets/actor-chloe-grace-moretz.jpg" size="100px" style="border: 1px solid white;"></b-avatar>
              <p class="mt-2"><strong>Chloë Grace Moretz</strong></p>
              <p style="color: white; font-size: 15px;">{{ $t('character') }} Kayla</p>
            </nuxt-link>
          </b-col>
          <b-col cols="6" sm="6" md="6" lg="3" xl="3">
            <nuxt-link to="/actor-michael-pena" class="actor">
              <b-avatar src="~/assets/actor-michael-pena.jpg" size="100px" style="border: 1px solid white;"></b-avatar>
              <p class="mt-2"><strong>Michael Peña</strong></p>
              <p style="color: white; font-size: 15px;">{{ $t('character') }} Terrancey</p>
            </nuxt-link>
          </b-col>
          <b-col cols="6" sm="6" md="6" lg="3" xl="3">
            <nuxt-link to="/actor-camila-rutherford" class="actor">
              <b-avatar src="~/assets/actor-camila-rutherford.jpg" size="100px" style="border: 1px solid white;"></b-avatar>
              <p class="mt-2"><strong>Camilla Rutherford</strong></p>
              <p style="color: white; font-size: 15px;">{{ $t('character') }} Wealthy Woman</p>
            </nuxt-link>
          </b-col>
        </b-row>
    </b-container>
        <Comentario />
  </div>
</template>
<style scoped>
.elenco{
  background-image: linear-gradient(to right bottom, #252525, #3f2942, #6b1f4a, #960037, #af0404);
}
h3{
  color: rgb(165, 35, 35);
  font-weight: bold;
}
.actor{
  text-decoration: none;
  color: white;
  line-height: 5px;
}
@media(max-width:576px){
  .elencoTitle{
    text-align: center;
    margin-top: 7px;
  }
}
@media(max-width:768px){
    .elencoTitle{
    text-align: center;
    margin-top: 7px;
  }
}
</style>
