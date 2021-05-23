<i18n>
{
  "en": {
    "titleFilm": "Space Jam: A New Legacy"
  },
  "es": {
    "titleFilm": "Space Jam: Una nueva era"
  },
  "pt-br": {
    "titleFilm": "Space Jam: um novo legado"
  }
}
</i18n>
<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <Actor
      nome = 'Sonequa Martin Green'
      atividades = 'Atriz'
      nomeNasc = 'Desconhecido'
      nascimento = '21 de março de 1985'
      nacionalidade = 'Americana'
      idade = '36'
      anosCar = '13'
      filmes = '12'
      img = 'actor-sonequa-martin-green.jpg'
    />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        items: [
          {
            text: this.$t("titleFilm"),
            href: '/space-jam'
          },
          {
            text: `${this.$t("actor")}: Sonequa Martin Green`,
            href: '#'
          },
        ]
      }
    }
  }
</script>
