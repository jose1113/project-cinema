<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <Actor
      nome = 'Michael Peña'
      atividades = 'Ator, Produtor Executivo'
      nomeNasc = 'Miguel Antonio Peña'
      nascimento = '13 de janeiro de 1976 (Chicago, Illinois, EUA)'
      nacionalidade = 'Americano'
      idade = '45'
      anosCar = '24'
      filmes = '64'
      img = 'actor-michael-pena.jpg'
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
            text: 'Ator: Michael Peña',
            href: '#'
          },
        ]
      }
    }
  }
</script>
