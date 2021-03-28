<template>
  <b-container fluid class="mt-3 card">
    <div class="container">
      <h3>Em breve</h3>
        <b-card-group columns style="max-width: 640px;">
          <nuxt-link to="/a-escavacao">
            <b-card img-src="~/assets/a-escavacao-vertical.jpg" img-alt="A escavação" overlay></b-card>
            <b-badge class="badge" style="background-color: orange;">14</b-badge>
          </nuxt-link>
          <nuxt-link to="/bliss-em-busca-da-felicidade">
            <b-card img-src="~/assets/bliss-vertical.jpg" img-alt="Bliss: em busca da felicidade" overlay></b-card>
            <b-badge class="badge" variant="danger">16</b-badge>
          </nuxt-link>
          <nuxt-link to="/raya-e-o-ultimo-dragao">
            <b-card img-src="~/assets/raya-vertical.jpg" img-alt="Raya e o último dragão" overlay></b-card>
            <b-badge class="badge" variant="danger">17</b-badge>
          </nuxt-link>
        </b-card-group>
    </div>
  </b-container>
</template>
<style scoped>
.badge{
  padding: 10px;
  font-size: 15px;
  margin-bottom: 15px;
}
.card{
  background-image: linear-gradient(to right bottom, #252525, #3f2942, #6b1f4a, #960037, #af0404);
}
h3{
  padding: 15px;
  color: white;
}
</style>
