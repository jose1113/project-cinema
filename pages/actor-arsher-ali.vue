<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <Actor
      nome = 'Arsher Ali'
      atividades = 'Ator'
      nomeNasc = 'Desconhecido'
      nascimento = '9 de abril de 1984'
      nacionalidade = 'Britânico'
      idade = '36 anos'
      anosCar = '12'
      filmes = '10'
      img = 'actor-arsher-ali.jpg'
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
import Actor from '~/components/Actor.vue'
  export default {
    data() {
      return {
        items: [
          {
            text: 'A escavação',
            href: '/a-escavacao'
          },
          {
            text: 'Ator: Arsher Ali',
            href: '#'
          },
        ],
      }
    }
  }
</script>
