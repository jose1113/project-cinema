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
      nome = 'Tae-ri Kim'
      atividades = 'Atriz'
      nomeNasc = 'Desconhecido'
      nascimento = '24 de abril de 1990'
      nacionalidade = 'Sul-coreana'
      idade = '31'
      anosCar = ''
      filmes = ''
      img = 'actor-tae-ri-kim.jpg'
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
            text: `${this.$t("actor")}: Tae-ri Kim`,
            href: '#'
          },
        ]
      }
    }
  }
</script>
