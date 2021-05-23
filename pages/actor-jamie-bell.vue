<i18n>
{
  "en": {
    "titleFilm": "Whithout remorse"
  },
  "es": {
    "titleFilm": "Sin disculpas"
  },
  "pt-br": {
    "titleFilm": "Sem remorso"
  }
}
</i18n>
<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <Actor
      nome = 'Jamie Bell'
      atividades = 'Ator, Intérprete de músicas adicionais, Produtor Executivo'
      nomeNasc = 'Andrew James Maftin Bell'
      nascimento = '14 de março de 1986 (Billingham, County Dunham, Inglaterra)'
      nacionalidade = 'Britânico'
      idade = '35'
      anosCar = '21'
      filmes = '30'
      img = 'actor-jamie-bell.jpg'
    />
  </div>
</template>
<style scoped>
.border{
  border: 1px solid black;
  padding: 12px;
}
.border strong{
  font-size: 30px;
}
</style>
<script>
  export default {
    data() {
      return {
        items: [
          {
            text: this.$t("titleFilm"),
            href: '/sem-remorso'
          },
          {
            text: `${this.$t("actor")}: Jamie Bell`,
            href: '#'
          },
        ]
      }
    }
  }
</script>
