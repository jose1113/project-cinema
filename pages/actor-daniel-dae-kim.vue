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
      nome = 'Daniel Dae Kim'
      atividades = 'Ator, Produtor Executivo, Diretor'
      nomeNasc = 'Desconhecido'
      nascimento = '4 de agosto de 1968'
      nacionalidade = 'Sul-coreano, Americano'
      idade = '52'
      anosCar = '36'
      filmes = '43'
      img = 'actor-daniel-dae-kim.jpg'
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
            text: `${this.$t("actor")}: Daniel Dae Kim`,
            href: '#'
          },
        ]
      }
    }
  }
</script>
