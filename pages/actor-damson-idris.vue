<i18n>
{
  "en": {
    "titleFilm": "Outside the Wire"
  },
  "es": {
    "titleFilm": "Zona de combate"
  },
  "pt-br": {
    "titleFilm": "Zona de combate"
  }
}
</i18n>
<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <Actor
      nome = 'Damson Idris'
      atividades = 'Ator'
      nomeNasc = 'Desconhecido'
      nascimento = '2 de setembro de 1991 (Peckham, Londres, Inglaterra, Reino Unido)'
      nacionalidade = 'Britânico'
      idade = '29'
      anosCar = '3'
      filmes = '7'
      img = 'actor-damson-idris.jpg'
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
            href: '/zona-de-combate'
          },
          {
            text: `${this.$t("actor")}: Damson Idris`,
            href: '#'
          },
        ]
      }
    }
  }
</script>
