<i18n>
{
  "en": {
    "titleFilm": "Space Jam: A New Legacy"
  },
  "es": {
    "titleFilm": "Space Jam: Una nueva era"
  },
  "pt-br": {
    "titleFilm": "Space Jam: um novo legado"
  }
}
</i18n>
<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <Actor
      nome = 'Lebron James'
      atividades = 'Ator, Produtor Executivo, Produtor'
      nomeNasc = 'Lebron Raymon James'
      nascimento = '30 de dezembro de 1984 (Akron, Ohio, EUA)'
      nacionalidade = 'Americano'
      idade = '36'
      anosCar = '17'
      filmes = '13'
      img = 'actor-lebron-james.jpg'
    />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        items: [
          {
            text: this.$t("titleFilm"),
            href: '/space-jam'
          },
          {
            text: `${this.$t("actor")}: Lebron James`,
            href: '#'
          },
        ]
      }
    }
  }
</script>
