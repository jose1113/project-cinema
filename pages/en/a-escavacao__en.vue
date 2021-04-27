<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
      <img src="~/assets/a-escavacao-horizontal.jpg" alt="Cartaz A escavação" class="w-100">
    <b-container class="mt-3">
      <h1>The excavation <b-badge variant="light" style="border: 1px solid black; font-size: 15px; color: purple;">Drama</b-badge></h1>
      <p>2021 | <b-badge style="padding:7px; background-color: orange;">14</b-badge> | 1h 52min</p>
    </b-container>
    <b-container>
      <b-row>
        <b-col cols="12" sm="12" md="12" lg="6" xl="6">
          <h3>Leia a sinopse</h3>
          <p class="mt-2 text-justify">The Excavation tells the story of an archaeologist who embarks on the historically important excavation of Sutton Hoo in 1938, where a group discovers a large amount of gold in a burial chamber on a buried ship. Based on the book of the same name by John Preston and a true story.</p>
        </b-col>
        <b-col cols="12" sm="12" md="12" lg="6" xl="6">
          <div class="d-flex justify-content-center">
            <iframe width="506" height="303" src="https://www.youtube.com/embed/rXoel44ZudM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <h4 class="elenco">Actors</h4>
      <b-row class="text-center">
          <b-col cols="6" sm="6" md="6" lg="3" xl="3">
            <nuxt-link to="/actor-ralph-fiennes" class="actor">
              <b-avatar src="~/assets/actor-ralph-fiennes.jpg" size="100px"></b-avatar>
              <p class="mt-2"><strong>Ralph Fiennes</strong></p>
              <p style="color: gray; font-size: 15px;">Character: Basil Brown</p>
            </nuxt-link>
          </b-col>
          <b-col cols="6" sm="6" md="6" lg="3" xl="3">
            <nuxt-link to="/actor-carey-mulligan" class="actor">
              <b-avatar src="~/assets/actor-carey-mulligan.jpg" size="100px"></b-avatar>
              <p class="mt-2"><strong>Carey Mulligan</strong></p>
              <p style="color: gray; font-size: 15px;">Character: Edith Pretty</p>
            </nuxt-link>
          </b-col>
          <b-col cols="6" sm="6" md="6" lg="3" xl="3">
            <nuxt-link to="/actor-lily-james" class="actor">
              <b-avatar src="~/assets/actor-lily-james.jpg" size="100px"></b-avatar>
              <p class="mt-2"><strong>Lily James</strong></p>
              <p style="color: gray; font-size: 15px;">Character: Peggy Preston</p>
            </nuxt-link>
          </b-col>
          <b-col cols="6" sm="6" md="6" lg="3" xl="3">
            <nuxt-link to="/actor-arsher-ali" class="actor">
              <b-avatar src="~/assets/actor-arsher-ali.jpg" size="100px"></b-avatar>
              <p class="mt-2"><strong>Arsher Ali</strong></p>
              <p style="color: gray; font-size: 15px;">Character: William Grimes</p>
            </nuxt-link>
          </b-col>
        </b-row>
        <Comentario />
    </b-container>
  </div>
</template>
<style scoped>
h3{
  color: rgb(165, 35, 35);
}
.actor{
  text-decoration: none;
  color: black;
  line-height: 5px;
}
@media(max-width:576px){
  .elenco{
    text-align: center;
    margin-top: 7px;
  }
}
@media(max-width:768px){
    .elenco{
    text-align: center;
    margin-top: 7px;
  }
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
            text: 'A escavação',
            href: '#'
          },
        ]
      }
    }
  }
</script>
