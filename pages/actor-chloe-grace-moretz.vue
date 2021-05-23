<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <Actor
      nome = 'Chloë Grace Moretz'
      atividades = 'Atriz'
      nomeNasc = 'Desconhecido'
      nascimento = '10 de fevereiro de 1997 (Atlanta, Georgia, EUA)'
      nacionalidade = 'Americana'
      idade = '24'
      anosCar = '15'
      filmes = '46'
      img = 'actor-chloe-grace-moretz.jpg'
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
            text: 'Tom e Jerry: o filme',
            href: '/tom-e-jerry'
          },
          {
            text: `${this.$t("actor")}: Chloë Grace Moretz`,
            href: '#'
          },
        ]
      }
    }
  }
</script>
