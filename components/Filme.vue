<template>
  <div>
      <img :src="`~/assets/${imgBanner}`" alt="Cartaz A escavação" class="w-100">
    <b-container class="mt-3">
      <h1>{{ title }} <b-badge variant="light" style="border: 1px solid black; font-size: 15px; color: purple;">{{ category }}</b-badge></h1>
      <p>{{ year }} | <b-badge v-if="14" style="padding:7px; background-color: orange;">{{ age }}</b-badge> | {{ duration }}</p>
    </b-container>
    <b-container>
      <b-row>
        <b-col cols="12" sm="12" md="12" lg="6" xl="6">
          <h3>Leia a sinopse</h3>
          <p class="mt-2 text-justify">{{ sinopse }}</p>
        </b-col>
        <b-col cols="12" sm="12" md="12" lg="6" xl="6">
          <div class="d-flex justify-content-center">
            {{ video }}
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
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
  props: {
    imgBanner: String,
    title: String,
    category: String,
    year: Number,
    age: Number,
    duration: String,
    sinopse: String,
    video: String
  }
}
</script>
