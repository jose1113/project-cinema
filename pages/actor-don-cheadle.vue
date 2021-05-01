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
            text: 'Space Jam: um novo legado',
            href: '/space-jam'
          },
          {
            text: 'Ator: Don Cheadle',
            href: '#'
          },
        ]
      }
    }
  }
</script>
