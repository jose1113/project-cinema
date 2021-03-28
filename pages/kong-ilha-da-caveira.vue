<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
      <img src="~/assets/kong-cartaz.jpg" alt="Cartaz Kong" class="w-100">
    <b-container class="mt-3">
      <h1>Kong: A Ilha da Caveira <b-badge variant="light" style="border: 1px solid black; font-size: 15px; color: blue;">Ação</b-badge></h1>
      <p>2017 | <b-badge variant="warning" style="padding:7px;">12</b-badge> | 1h 58min</p>
    </b-container>
    <b-container>
      <b-row>
        <b-col>
          <h3>Leia a sinopse</h3>
          <p class="mt-2 text-justify">Lendas entram em rota de colisão em Godzilla vs. Kong, quando esses dois adversários míticos se encontram em uma batalha espetacular e histórica, que coloca o destino do mundo em jogo. Kong e seus protetores iniciam uma jornada perigosa para encontrar seu verdadeiro lar. Com eles está Jia, jovem órfã com quem Kong criou um vínculo único e sólido. Mas, inesperadamente, eles cruzam o caminho de um Godzilla enfurecido, que tem deixado atrás de si uma trilha de destruição em todo o planeta. O confronto épico entre os dois titãs - instigado por forças invisíveis - é apenas a porta de entrada do grande mistério que reside nas profundezas do núcleo da Terra.</p>
        </b-col>
        <b-col>
          <div class="d-flex justify-content-center">
            <iframe width="584" height="357" src="https://www.youtube.com/embed/HFDkRKUpKDs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
            text: 'Kong: A Ilha da Caveira',
            href: '#'
          },
        ]
      }
    }
  }
</script>
