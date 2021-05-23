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
      nome = 'Guy Pearce'
      atividades = 'Ator, Intérprete (músicas do filme)'
      nomeNasc = 'Guy Edward Pearce'
      nascimento = '5 de outubro de 1967 (Ely, Cambridgeshire, Inglaterra, Reino Unido)'
      nacionalidade = 'Britânico, Australiano'
      idade = '53'
      anosCar = '32'
      filmes = '50'
      img = 'actor-guy-pearce.jpg'
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
            text: `${this.$t("actor")}: Guy Pearce`,
            href: '#'
          },
        ]
      }
    }
  }
</script>
