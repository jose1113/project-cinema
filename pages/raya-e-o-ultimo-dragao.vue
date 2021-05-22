<i18n>
{
  "en": {
    "titleFilm": "Raya and the last dragon",
    "feature": "Action",
    "sinopse": "In Raya and the Last Dragon, Kumandra is a kingdom inhabited by a vast and ancient civilization known for having spent generations worshiping dragons, their powers and their wisdom. However, with the creatures gone, the earth is seized by an obscure force. When a warrior named Raya, convinced that the species has not been extinct, decides to go in search of the last dragon, her adventure can change the course of the whole world."
  },
  "es": {
    "titleFilm": "Raya y el último dragón",
    "feature": "Acción",
    "sinopse": "En Raya y el último dragón, Kumandra es un reino habitado por una vasta y antigua civilización conocida por haber pasado generaciones adorando a los dragones, sus poderes y su sabiduría. Sin embargo, con las criaturas desaparecidas, una fuerza oscura se apodera de la tierra. Cuando una guerrera llamada Raya, convencida de que la especie no se ha extinguido, decide ir en busca del último dragón, su aventura puede cambiar el rumbo del mundo entero."
  },
  "pt-br": {
    "titleFilm": "Raya e o último dragão",
    "feature": "Ação",
    "sinopse": "Em Raya e o Último Dragão, Kumandra é um reino habitado por uma vasta e antiga civilização conhecida por ter passado gerações venerado os dragões, seus poderes e sua sabedoria. Porém, com as criaturas desaparecidas, a terra é tomada por uma força obscura. Quando uma guerreira chamada Raya, convencida de que a espécie não foi extinta, decide sair em busca do último dragão, sua aventura pode mudar o curso de todo o mundo."
  }
}
</i18n>
<template>
  <div>
      <img src="~/assets/raya-cartaz.jpg" alt="Cartaz Raya e o último dragão" class="w-100">
    <b-container class="mt-3">
      <h1 style="font-weight: bold;">{{ $t('titleFilm') }} <b-badge variant="light" style="border: 1px solid black; font-size: 15px; color: blue;">{{ $t('feature') }}</b-badge></h1>
      <p>2020 | <b-badge variant="danger" style="padding:7px;">16</b-badge> | 1h 47min</p>
    </b-container>
    <b-container>
      <b-row>
        <b-col>
        <h3 style="font-weight: bold;">{{ $t('sinopseTitle') }}</h3>
          <p class="mt-2 text-justify">{{ $t('sinopse') }}</p>
        </b-col>
        <b-col>
          <div class="d-flex justify-content-center">
            <iframe width="598" height="332" src="https://www.youtube.com/embed/Yh-XpUlDjJk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<style scoped>
h3{
  color: rgb(165, 35, 35);
}
</style>
