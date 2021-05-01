<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <Actor
      nome = 'Ralph Fiennes'
      atividades = 'Ator, diretor e produtor'
      nomeNasc = 'Ralph Nathaniel Twisleton-Wykeham-Fiennes'
      nascimento = '22 de dezembro de 1962 (Sufolk, Inglaterra)'
      nacionalidade = 'Britânico'
      idade = '58'
      anosCar = '29'
      filmes = '62'
      img = 'actor-ralph-fiennes.jpg'
    />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        items: [
          {
            text: 'A escavação',
            href: '/a-escavacao'
          },
          {
            text: 'Ator: Ralph Fiennes',
            href: '#'
          },
        ]
      }
    }
  }
</script>
