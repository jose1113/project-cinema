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
      nome = 'Jodie Turner-Smith'
      atividades = 'Atriz'
      nomeNasc = 'Desconhecido'
      nascimento = '7 de setembro de 1986'
      nacionalidade = 'Britânica'
      idade = '34'
      anosCar = '4'
      filmes = '8'
      img = 'actor-jodie-turner-smith.jpg'
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
            text: `${this.$t("actor")}: Jodie Turner-Smith`,
            href: '#'
          },
        ]
      }
    }
  }
</script>
