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
      nome = 'Don Cheadle'
      atividades = 'Ator, Produtor, Diretor'
      nomeNasc = 'Donald Frank Cheadle'
      nascimento = '29 de novembro de 1964 (Kansas City, Missouri, EUA)'
      nacionalidade = 'Americano'
      idade = '56'
      anosCar = '35'
      filmes = '53'
      img = 'actor-don-cheadle.jpg'
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
            text: `${this.$t("actor")}: Don Cheadle`,
            href: '#'
          },
        ]
      }
    }
  }
</script>
