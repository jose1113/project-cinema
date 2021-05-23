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
      nome = 'Michael B. Jordan'
      atividades = ' Ator, Produtor, Produtor Executivo'
      nomeNasc = 'Michael Bakari Jordan'
      nascimento = '9 de fevereiro de 1987 (Santa Ana, Califórnia, EUA)'
      nacionalidade = 'Americano'
      idade = '34'
      anosCar = '21'
      filmes = '35'
      img = 'actor-michael-b-jordan.jpg'
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
            text: `${this.$t("actor")}: Michael B. Jordan`,
            href: '#'
          },
        ]
      }
    }
  }
</script>
