<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <Actor
      nome = 'Sonequa Martin Green'
      atividades = 'Atriz'
      nomeNasc = 'Desconhecido'
      nascimento = '21 de março de 1985'
      nacionalidade = 'Americana'
      idade = '36 anos'
      anosCar = '13'
      filmes = '12'
      img = 'actor-sonequa-martin-green.jpg'
    />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        items: [
          {
            text: 'Space Jam: um novo legado',
            href: '/space-jam'
          },
          {
            text: 'Atriz: Sonequa Martin Green',
            href: '#'
          },
        ]
      }
    }
  }
</script>
