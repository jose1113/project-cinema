<i18n>
{
  "en": {
    "titleFilm": "Whithout remorse",
    "feature": "Action",
    "sinopse": "Without Remorse tells the story of John Kelly (Michael B. Jordan), an elite Navy officer. When a squad of Russian soldiers kills his pregnant wife in retaliation for his role in a top-secret operation, he pursues the killers at all costs. Joining forces with a fellow navy officer (Jodie Turner-Smith) and a shadowy CIA agent (Jamie Bell), Kelly's mission unwittingly exposes a secret conspiracy that threatens to involve the United States and Russia in a major war. Torn between personal honor and loyalty to his country, Kelly must fight without any remorse against his enemies if he wants to avoid disaster and expose the powerful figures behind the conspiracy. Inspired by Tom Clancy's book, part of the Jack Ryan universe."
  },
  "es": {
    "titleFilm": "Sin disculpas",
    "feature": "Acción",
    "sinopse": "Without Remorse cuenta la historia de John Kelly (Michael B. Jordan), un oficial de élite de la Armada. Cuando un escuadrón de soldados rusos mata a su esposa embarazada en represalia por su papel en una operación ultrasecreta, persigue a los asesinos a toda costa. Uniendo fuerzas con una compañera oficial de la marina (Jodie Turner-Smith) y un misterioso agente de la CIA (Jamie Bell), la misión de Kelly, sin saberlo, expone una conspiración secreta que amenaza con involucrar a Estados Unidos y Rusia en una gran guerra. Dividido entre el honor personal y la lealtad a su país, Kelly debe luchar sin ningún remordimiento contra sus enemigos si quiere evitar el desastre y exponer a las poderosas figuras detrás de la conspiración. Inspirado en el libro de Tom Clancy, parte del universo de Jack Ryan."
  },
  "pt-br": {
    "titleFilm": "Sem remorso",
    "feature": "Ação",
    "sinopse": "Sem Remorso conta a história de John Kelly (Michael B. Jordan), um oficial de elite da Marinha. Quando um esquadrão de soldados russos mata sua esposa grávida em retaliação ao seu papel em uma operação ultrassecreta, ele persegue os assassinos a todo custo. Unindo forças com um companheira da marinha (Jodie Turner-Smith) e um sombrio agente da CIA (Jamie Bell), a missão de Kelly involuntariamente expõe uma conspiração secreta que ameaça envolver os EUA e a Rússia em uma grande guerra. Dividido entre a honra pessoal e a lealdade ao seu país, Kelly deve lutar sem nenhum remorso contra seus inimigos se quiser evitar um desastre e expor as figuras poderosas por trás da conspiração. Inspirado no livro de Tom Clancy, parte do universo de Jack Ryan."
  }
}
</i18n>
<template>
  <div>
    <img src="~/assets/sem-remorso-horizontal.jpg" alt="Cartaz Sem remorso" class="w-100">
    <b-container class="mt-3">
      <h1 style="font-weight: bold;">{{ $t('titleFilm') }} <b-badge variant="light" style="border: 1px solid black; font-size: 15px; color: purple;">{{ $t('feature') }}</b-badge></h1>
      <p>2021 | <b-badge style="padding:7px;" variant="danger">16</b-badge> | 1h 50min</p>
    </b-container>
    <b-container>
      <b-row>
        <b-col cols="12" sm="12" md="12" lg="6" xl="6">
          <h3 style="font-weight: bold;">{{ $t('sinopseTitle') }}</h3>
          <p class="mt-2 text-justify">{{ $t('sinopse') }}</p>
        </b-col>
        <b-col cols="12" sm="12" md="12" lg="6" xl="6">
          <div class="d-flex justify-content-center">
            <iframe width="506" height="303" src="https://www.youtube.com/embed/rXoel44ZudM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="elenco rounded">
      <h4 class="text-center text-white mt-3 p-2">{{ $t('elenco') }}</h4>
      <b-row class="text-center">
          <b-col cols="6" sm="6" md="6" lg="3" xl="3">
            <nuxt-link to="/actor-ralph-fiennes" class="actor">
              <b-avatar src="~/assets/actor-ralph-fiennes.jpg" size="100px" style="border: 1px solid white;"></b-avatar>
              <p class="mt-2 text-white"><strong>Ralph Fiennes</strong></p>
              <p style="color: white; font-size: 15px;">{{ $t('character') }} Basil Brown</p>
            </nuxt-link>
          </b-col>
          <b-col cols="6" sm="6" md="6" lg="3" xl="3">
            <nuxt-link to="/actor-carey-mulligan" class="actor">
              <b-avatar src="~/assets/actor-carey-mulligan.jpg" size="100px" style="border: 1px solid white;"></b-avatar>
              <p class="mt-2 text-white"><strong>Carey Mulligan</strong></p>
              <p style="color: white; font-size: 15px;">{{ $t('character') }} Edith Pretty</p>
            </nuxt-link>
          </b-col>
          <b-col cols="6" sm="6" md="6" lg="3" xl="3">
            <nuxt-link to="/actor-lily-james" class="actor">
              <b-avatar src="~/assets/actor-lily-james.jpg" size="100px" style="border: 1px solid white;"></b-avatar>
              <p class="mt-2 text-white"><strong>Lily James</strong></p>
              <p style="color: white; font-size: 15px;">{{ $t('character') }} Peggy Preston</p>
            </nuxt-link>
          </b-col>
          <b-col cols="6" sm="6" md="6" lg="3" xl="3">
            <nuxt-link to="/actor-arsher-ali" class="actor">
              <b-avatar src="~/assets/actor-arsher-ali.jpg" size="100px" style="border: 1px solid white;"></b-avatar>
              <p class="mt-2 text-white"><strong>Arsher Ali</strong></p>
              <p style="color: white; font-size: 15px;">{{ $t('character') }} William Grimes</p>
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
