<i18n>
{
  "en": {
    "titleFilm": "The Dig"
  },
  "es": {
    "titleFilm": "La excavación"
  },
  "pt-br": {
    "titleFilm": "A escavação"
  }
}
</i18n>
<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <Actor
      nome = 'Ralph Fiennes'
      atividades = 'Ator, diretor e produtor'
      nomeNasc = 'Ralph Nathaniel Twisleton-Wykeham-Fiennes'
      nascimento = '22 de dezembro de 1962 (Sufolk, Inglaterra)'
      nacionalidade = 'Britânico'
      idade = '58'
      anosCar = '29'
      filmes = '62'
      img = 'actor-ralph-fiennes.jpg'
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
            href: '/a-escavacao'
          },
          {
            text: `${this.$t("actor")}: Ralph Fiennes`,
            href: '#'
          },
        ]
      }
    }
  }
</script>
