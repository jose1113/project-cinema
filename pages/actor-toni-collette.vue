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
      nome = 'Toni Collette'
      atividades = 'Atriz, Produtora de set, Produtora Executiva'
      nomeNasc = 'Antonia Collette'
      nascimento = '1 de novembro de 1972 (Sydney, New South Wales, Austrália)'
      nacionalidade = 'Australiana'
      idade = '48'
      anosCar = '26'
      filmes = '56'
      img = 'actor-toni-collette.jpg'
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
            text: `${this.$t("actor")}: Toni Collette`,
            href: '#'
          },
        ]
      }
    }
  }
</script>
