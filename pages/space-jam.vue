<i18n>
{
  "en": {
    "titleFilm": "Space Jam: A New Legacy",
    "feature": "Animation",
    "define": "To be defined",
    "duration": "Duration not set",
    "sinopse": "In Space Jam: A New Legacy, artificial intelligence, Al G (Dom Cheadle) kidnaps the son of Lebron James and sends the legendary Los Angeles Lakers player to a parallel reality, where only the Warner Bros. cartoon characters live. To rescue your child, he will need to win an epic basketball game against digital superversions of the biggest stars in NBA and WNBA history. For this tough mission, King James will have the help of Bugs Bunny, Daffy Duck, Lola Bunny, among other characters.",
    "classification": "Indicative classification to be defined."
  },
  "es": {
    "titleFilm": "Space Jam: Una nueva era",
    "feature": "Animación",
    "define": "A definir",
    "duration": "Duración no establecida",
    "sinopse": "En Space Jam: A New Legacy, inteligencia artificial, Al G (Dom Cheadle) secuestra al hijo de Lebron James y envía al legendario jugador de Los Angeles Lakers a una realidad paralela, donde solo viven los personajes de dibujos animados de Warner Bros. Para rescatar a su hijo, deberá ganar un partido de baloncesto épico contra las superversiones digitales de las estrellas más importantes de la historia de la NBA y la WNBA. Para esta dura misión, King James contará con la ayuda de Bugs Bunny, Daffy Duck, Lola Bunny, entre otros personajes.",
    "classification": "Clasificación indicativa por definir."
  },
  "pt-br": {
    "titleFilm": "Space Jam: um novo legado",
    "feature": "Animação",
    "define": "A definir",
    "duration": "Duração não definida",
    "sinopse": "Em Space Jam: Um Novo Legado, a inteligência artificial, Al G (Dom Cheadle) sequestra o filho de Lebron James e envia o lendário jogador dos Los Angeles Lakers para uma realidade paralela, onde vivem apenas os personagens de desenho animado da Warner Bros. Para resgatar o seu filho, ele precisará vencer uma partida épica de basquete contra superversões digitais das maiores estrelas da história da NBA e da WNBA. Para essa dura missão, King James terá a ajuda de Pernalonga, Patolino, Lola Bunny, dentre outros personagens.",
    "classification": "Classificação indicativa a definir."
  }
}
</i18n>
<template>
  <div>
      <img src="~/assets/space-jam-horizontal.jpg" alt="Space Jam: um novo legado cartaz" class="w-100">
    <b-container class="mt-3">
      <h1 style="font-weight: bold;">{{ $t('titleFilm') }} <b-badge variant="light" style="border: 1px solid black; font-size: 15px; color: green;">{{ $t('feature') }}</b-badge></h1>
      <p>2021 | <b-badge variant="danger" style="padding:7px;">{{ $t('define') }}</b-badge> | {{ $t('duration') }}</p>
    </b-container>
    <b-container>
      <b-row>
        <b-col cols="12" sm="12" md="12" lg="6" xl="6">
          <h3 style="font-weight: bold;">{{ $t('sinopseTitle') }}</h3>
          <p class="mt-2 text-justify">{{ $t('sinopse') }}</p>
          <p>{{ $t('classification') }}</p>
        </b-col>
        <b-col cols="12" sm="12" md="12" lg="6" xl="6">
          <div class="d-flex justify-content-center">
            <iframe width="590" height="444" src="https://www.youtube.com/embed/t1m7zl8H-kE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="elenco rounded">
      <h4 class="text-center text-white mt-3 p-2">{{ $t('elenco') }}</h4>
      <b-row class="text-center d-flex justify-content-center">
          <b-col cols="6" sm="6" md="6" lg="3" xl="3">
            <nuxt-link to="/actor-lebron-james" class="actor">
              <b-avatar src="~/assets/actor-lebron-james.jpg" size="100px" style="border: 1px solid white;"></b-avatar>
              <p class="mt-2 text-white"><strong>Lebron James</strong></p>
              <p style="color: white; font-size: 15px;">{{ $t('character') }} LeBron James</p>
            </nuxt-link>
          </b-col>
          <b-col cols="6" sm="6" md="6" lg="3" xl="3">
            <nuxt-link to="/actor-don-cheadle" class="actor">
              <b-avatar src="~/assets/actor-don-cheadle.jpg" size="100px" style="border: 1px solid white;"></b-avatar>
              <p class="mt-2 text-white"><strong>Don Cheadle</strong></p>
              <p style="color: white; font-size: 15px;">{{ $t('character') }} AI G Rhythm</p>
            </nuxt-link>
          </b-col>
          <b-col cols="6" sm="6" md="6" lg="3" xl="3">
            <nuxt-link to="/actor-sonequa-martin-green" class="actor">
              <b-avatar src="~/assets/actor-sonequa-martin-green.jpg" size="100px" style="border: 1px solid white;"></b-avatar>
              <p class="mt-2 text-white"><strong>Sonequa Martin-Green</strong></p>
              <p style="color: white; font-size: 15px;">{{ $t('character') }} Kamiyah James</p>
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
