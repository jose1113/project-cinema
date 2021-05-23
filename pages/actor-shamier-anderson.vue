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
      nome = 'Shamier Anderson'
      atividades = 'Ator'
      nomeNasc = 'Desconhecido'
      nascimento = '6 de maio de 1991 (Toronto, Canadá)'
      nacionalidade = 'Canadense'
      idade = '30'
      anosCar = '10'
      filmes = '19'
      img = 'actor-shamier-anderson.jpg'
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
            text: `${this.$t("actor")}: Shamier Anderson`,
            href: '#'
          },
        ]
      }
    }
  }
</script>
