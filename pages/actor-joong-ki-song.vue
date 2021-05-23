<i18n>
{
  "en": {
    "titleFilm": "Space sweepers"
  },
  "es": {
    "titleFilm": "Nuevo orden espacial"
  },
  "pt-br": {
    "titleFilm": "Nova ordem espacial"
  }
}
</i18n>
<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <Actor
      nome = 'Joong Ki Song'
      atividades = 'Ator'
      nomeNasc = 'Desconhecido'
      nascimento = '19 de setembro de 1985 (Daejeon, Coreia do Sul)'
      nacionalidade = 'Sul-coreano'
      idade = '35'
      anosCar = ''
      filmes = ''
      img = 'actor-joong-ki-song.jpg'
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
            href: '/nova-ordem-espacial'
          },
          {
            text: `${this.$t("actor")}: Joong Ki Song`,
            href: '#'
          },
        ]
      }
    }
  }
</script>
