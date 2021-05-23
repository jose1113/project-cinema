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
      nome = 'Enzo Cilenti'
      atividades = 'Ator'
      nomeNasc = 'Desconhecido'
      nascimento = 'Desconhecido'
      nacionalidade = 'Britânico'
      idade = 'Desconhecido'
      anosCar = 'Desconhecido'
      filmes = 'Desconhecido'
      img = 'actor-enzo-cilenti.jpg'
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
            text: `${this.$t("actor")}: Enzo Cilenti`,
            href: '#'
          },
        ]
      }
    }
  }
</script>
