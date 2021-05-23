<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <Actor
      nome = 'Camilla Rutherford'
      atividades = 'Atriz'
      nomeNasc = 'Desconhecido'
      nascimento = '20 de setembro de 1976'
      nacionalidade = 'Britânica'
      idade = '44'
      anosCar = '19'
      filmes = '11'
      img = 'actor-camila-rutherford.jpg'
    />
  </div>
</template>
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
            text: `${this.$t("actor")}: Camilla Rutherford`,
            href: '#'
          },
        ]
      }
    }
  }
</script>
