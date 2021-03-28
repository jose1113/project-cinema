<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
      <img src="~/assets/hobbit-cartaz.jpg" alt="Cartaz Kong" class="w-100">
    <b-container class="mt-3">
      <h1>O Hobbit: A batalha dos cinco exércitos <b-badge variant="light" style="border: 1px solid black; font-size: 15px; color: orange;">Fantasia</b-badge></h1>
      <p>2017 | <b-badge variant="warning" style="padding:7px;">14</b-badge> | 1h 58min</p>
    </b-container>
    <b-container>
      <b-row>
        <b-col>
          <h3>Leia a sinopse</h3>
          <p class="mt-2 text-justify">Em O Hobbit: A Batalha dos Cinco Exércitos, após ser expulso da montanha de Erebor, o dragão Smaug ataca com fúria a cidade dos homens que fica próxima ao local. Após muita destruição, Bard (Luke Evans) consegue derrotá-lo. Não demora muito para que a queda de Smaug se espalhe, atraindo os mais variados interessados nas riquezas que existem dentro de Erebor. Entretanto, Thorin (Richard Armitage) está disposto a tudo para impedir a entrada de elfos, anões e orcs, ainda mais por ser tomado por uma obsessão crescente pela riqueza à sua volta. Paralelamente a estes eventos, Bilbo Bolseiro (Martin Freeman) e Gandalf (Ian McKellen) tentam impedir a guerra.</p>
        </b-col>
        <b-col>
          <div class="d-flex justify-content-center">
            <iframe width="589" height="330" src="https://www.youtube.com/embed/VKkFW5TTB6g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<style scoped>
h3{
  color: rgb(165, 35, 35);
}
</style>
<script>
  export default {
    data() {
      return {
        items: [
          {
            text: 'Página inicial',
            href: '/'
          },
          {
            text: 'O Hobbit: A batalha dos cinco exércitos',
            href: '#'
          },
        ]
      }
    }
  }
</script>
