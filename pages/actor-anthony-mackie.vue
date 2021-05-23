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
      nome = 'Anthony Mackie'
      atividades = 'Ator, Produtor, Produtor de set'
      nomeNasc = 'Anthony Dwane Mackie'
      nascimento = '23 de setembro de 1978 (Nova Orleans, Louisiana, EUA)'
      nacionalidade = 'Americano'
      idade = '42'
      anosCar = '17'
      filmes = '58'
      img = 'actor-anthony-mackie.jpg'
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
            text: `${this.$t("actor")}: Anthony Mackie`,
            href: '#'
          },
        ]
      }
    }
  }
</script>
