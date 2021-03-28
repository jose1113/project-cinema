<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <b-container>
      <b-row class="d-flex align-items-center">
        <b-col>
          <h3 class="mb-3">Ralph Fiennes</h3>
          <b-avatar src="~/assets/actor-ralph-fiennes.jpg" size="300px"></b-avatar>
        </b-col>
        <b-col>
          <p><strong>Atividades:</strong> <span>Ator, diretor e produtor</span></p>
          <p><strong>Nome de nascimento: </strong><span>Ralph Nathaniel Twisleton-Wykeham-Fiennes</span></p>
          <p><strong>Nascimento: </strong><span>22 de dezembro de 1962 (Sufolk, Inglaterra)</span></p>
          <p><strong>Nacionalidade: </strong><span>Britânico</span></p>
          <p><strong>Idade: </strong><span>58 anos</span></p>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row class="mt-3">
        <b-col class="border text-center">
          <strong>29</strong>
          <p>Anos de carreira</p>
        </b-col>
        <b-col class="border text-center">
          <strong>62</strong>
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
            text: 'Bliss: Em busca da felicidade',
            href: '/bliss-em-busca-da-felicidade'
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
