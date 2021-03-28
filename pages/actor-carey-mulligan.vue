<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <b-container>
      <b-row class="d-flex align-items-center">
        <b-col>
          <h3 class="mb-3">Carey Mulligan</h3>
          <b-avatar src="~/assets/actor-carey-mulligan.jpg" size="300px"></b-avatar>
        </b-col>
        <b-col>
          <p><strong>Atividades:</strong> <span>Atriz</span></p>
          <p><strong>Nome de nascimento: </strong><span>Carey Hannah Mulligan</span></p>
          <p><strong>Nascimento: </strong><span>28 de maio de 1985 (Londres, Inglaterra)</span></p>
          <p><strong>Nacionalidade: </strong><span>Britânica</span></p>
          <p><strong>Idade: </strong><span>35 anos</span></p>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row class="mt-3">
        <b-col class="border text-center">
          <strong>14</strong>
          <p>Anos de carreira</p>
        </b-col>
        <b-col class="border text-center">
          <strong>23</strong>
          <p>Filmes e séries lançados</p>
        </b-col>
      </b-row>
    </b-container>
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
