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
      nome = 'Arsher Ali'
      atividades = 'Ator'
      nomeNasc = 'Desconhecido'
      nascimento = '9 de abril de 1984'
      nacionalidade = 'Britânico'
      idade = '36'
      anosCar = '12'
      filmes = '10'
      img = 'actor-arsher-ali.jpg'
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
            href: '/a-escavacao'
          },
          {
            text: `${this.$t("actor")}: Arsher Ali`,
            href: '#'
          },
        ],
      }
    }
  }
</script>
