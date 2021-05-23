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
      nome = 'Emily Beecham'
      atividades = 'Atriz'
      nomeNasc = 'Desconhecido'
      nascimento = '12 de maio de 1984'
      nacionalidade = 'Britânica, Americana'
      idade = '37'
      anosCar = '13'
      filmes = '17'
      img = 'actor-emily-beecham.jpg'
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
            text: `${this.$t("actor")}: Emily Beecham`,
            href: '#'
          },
        ]
      }
    }
  }
</script>
