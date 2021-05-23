<i18n>
{
  "en": {
    "titleFilm": "Stowaway"
  },
  "es": {
    "titleFilm": "Pasajero accidental"
  },
  "pt-br": {
    "titleFilm": "Passageiro acidental"
  }
}
</i18n>
<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <Actor
      nome = 'Anna Kendrick'
      atividades = 'Atriz, Produtora Executiva'
      nomeNasc = 'Anna Cooke Kendrick'
      nascimento = '9 de agosto de 1985 (Portland, Maine, EUA)'
      nacionalidade = 'Americana'
      idade = '35'
      anosCar = '12'
      filmes = '41'
      img = 'actor-anna-kendrick.jpg'
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
            href: '/passageiro-acidental'
          },
          {
            text: `${this.$t("actor")}: Anna Kendrick`,
            href: '#'
          },
        ]
      }
    }
  }
</script>
