<i18n>
{
  "en": {
    "titleFilm": "Space sweepers",
    "feature": "Science fiction",
    "sinopse": "New Space Order takes place in the year 2092, when space is dominated by dangerous floating debris, such as discarded satellites and deserted spaceships. The crew of the The Victory ship travels through space looking for the rubbish they can earn money from, while also competing with debris-collecting ships from other countries and using the speed of their vessels to defeat their rivals."
  },
  "es": {
    "titleFilm": "Nuevo orden espacial",
    "feature": "Ciencia ficción",
    "sinopse": "New Space Order tiene lugar en el año 2092, cuando el espacio está dominado por peligrosos escombros flotantes, como satélites descartados y naves espaciales desiertas. La tripulación del barco The Victory viaja por el espacio en busca de la basura de la que pueden ganar dinero, mientras compite con recolectores de escombros de otros países y utiliza la velocidad de sus barcos para derrotar a sus rivales."
  },
  "pt-br": {
    "titleFilm": "Nova ordem espacial",
    "feature": "Ficção científica",
    "sinopse": "Nova Ordem Espacial se passa no ano de 2092, quando o espaço está dominado por lixos flutuantes perigosos, como satélites descartados e espaçonaves desertas. A tripulação da nave The Victory viaja pelo espaço procurando o lixo com que eles podem ganhar dinheiro, enquanto também compete com navios coletores de detritos de outros países e usa a rapidez de suas embarcações para derrotar seus rivais."
  }
}
</i18n>
<template>
  <div>
      <img src="~/assets/nova-ordem-espacial-horizontal.png" alt="Cartaz Nova ordem espacial" class="w-100">
    <b-container class="mt-3">
      <h1 style="font-weight: bold;">{{ $t('titleFilm') }} <b-badge variant="light" style="border: 1px solid black; font-size: 15px; color: green;">{{ $t('feature') }}</b-badge></h1>
      <p>2021 | <b-badge style="padding:7px; background-color: orange;">14</b-badge> | 2h 16min</p>
    </b-container>
    <b-container>
      <b-row>
        <b-col cols="12" sm="12" md="12" lg="6" xl="6">
          <h3>{{ $t('sinopseTitle') }}</h3>
          <p class="mt-2 text-justify">{{ $t('sinopse') }}</p>
        </b-col>
        <b-col cols="12" sm="12" md="12" lg="6" xl="6">
          <div class="d-flex justify-content-center">
            <iframe width="509" height="300" src="https://www.youtube.com/embed/v6jmKLAW928" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="elenco rounded">
      <h4 class="text-center text-white mt-3 p-2" style="font-weight: 500;">{{ $t('elenco') }}</h4>
      <b-row class="text-center d-flex justify-content-center rounded p-3">
          <b-col cols="6" sm="6" md="6" lg="3" xl="3">
            <nuxt-link to="/actor-joong-ki-song" class="actor">
              <b-avatar src="~/assets/actor-joong-ki-song.jpg" size="100px" style="border: 1px solid white;"></b-avatar>
              <p class="mt-2"><strong>Joong-ki Song</strong></p>
              <p style="color: white; font-size: 15px;">{{ $t('character') }} Tae-ho</p>
            </nuxt-link>
          </b-col>
          <b-col cols="6" sm="6" md="6" lg="3" xl="3">
            <nuxt-link to="/actor-tae-ri-kim" class="actor">
              <b-avatar src="~/assets/actor-tae-ri-kim.jpg" size="100px" style="border: 1px solid white;"></b-avatar>
              <p class="mt-2"><strong>Tae-ri Kim</strong></p>
              <p style="color: white; font-size: 15px;">{{ $t('character') }} Captain Jang</p>
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
