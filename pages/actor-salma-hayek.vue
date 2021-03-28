<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <b-container>
      <b-row class="d-flex align-items-center">
        <b-col>
          <h3 class="mb-3">Salma Hayek</h3>
          <b-avatar src="~/assets/actor-salma-hayek.jpg" size="300px"></b-avatar>
        </b-col>
        <b-col>
          <p><strong>Atividades:</strong> <span>Atriz, produtora executiva, produtora</span></p>
          <p><strong>Nome de nascimento: </strong><span>Salma Hayek Jiménez</span></p>
          <p><strong>Nascimento: </strong><span>2 de setembro de 1966 (Coatzacoalcos, Veracruz, México)</span></p>
          <p><strong>Nacionalidade: </strong><span>Mexicana, Americana</span></p>
          <p><strong>Idade: </strong><span>54 anos</span></p>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row class="mt-3">
        <b-col class="border text-center">
          <strong>28</strong>
          <p>Anos de carreira</p>
        </b-col>
        <b-col class="border text-center">
          <strong>59</strong>
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
            text: 'Atriz: Salma Hayek',
            href: '#'
          },
        ]
      }
    }
  }
</script>
