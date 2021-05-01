<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <Actor
      nome = 'Carey Mulligan'
      atividades = 'Atriz'
      nomeNasc = 'Carey Hannah Mulligan'
      nascimento = '28 de maio de 1985 (Londres, Inglaterra)'
      nacionalidade = 'Britânica'
      idade = '35'
      anosCar = '14'
      filmes = '23'
      img = 'actor-carey-mulligan.jpg'
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
            text: 'A escavação',
            href: '/a-escavacao'
          },
          {
            text: 'Atriz: Carey Mulligan',
            href: '#'
          },
        ]
      }
    }
  }
</script>
