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
      nome = 'Lily James'
      atividades = 'Atriz'
      nomeNasc = 'Lily Chloe Ninette Thomso'
      nascimento = '5 de abril de 1989 (Esher, Inglaterra)'
      nacionalidade = 'Britânica'
      idade = '31'
      anosCar = '9'
      filmes = '19'
      img = 'actor-lily-james.jpg'
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
            text: `${this.$t("actor")}: Lily James`,
            href: '#'
          },
        ]
      }
    }
  }
</script>
