<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <b-container>
      <b-row class="d-flex align-items-center">
        <b-col>
          <h3 class="mb-3">Owen Wilson</h3>
          <b-avatar src="~/assets/actor-owen.jpg" size="300px"></b-avatar>
        </b-col>
        <b-col>
          <p><strong>Atividades:</strong> <span>Ator, roteirista, produtor de set</span></p>
          <p><strong>Nome de nascimento: </strong><span>Owen Cunningham Wilson</span></p>
          <p><strong>Nascimento: </strong><span>18 de novembro de 1968 (Dallas, Texas, EUA)</span></p>
          <p><strong>Nacionalidade: </strong><span>Americano</span></p>
          <p><strong>Idade: </strong><span>52 anos</span></p>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row class="mt-3">
        <b-col class="border text-center">
          <strong>24</strong>
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
            text: 'Ator: Owen Wilson',
            href: '#'
          },
        ]
      }
    }
  }
</script>
