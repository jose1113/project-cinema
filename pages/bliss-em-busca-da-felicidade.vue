<template>
  <div>
      <img src="~/assets/bliss-horizontal.jpg" alt="Bliss: Em busca da felicidade cartaz" class="w-100">
    <b-container class="mt-3">
      <h1>Bliss: Em busca da felicidade <b-badge variant="light" style="border: 1px solid black; font-size: 15px; color: purple;">Drama</b-badge></h1>
      <p>2021 | <b-badge variant="danger" style="padding:7px;">16</b-badge> | 1h 44min</p>
    </b-container>
    <b-container>
      <b-row>
        <b-col>
          <h3>Leia a sinopse</h3>
          <p class="mt-2 text-justify">Em Bliss: Em Busca da Felicidade, Greg (Owen Wilson) é um homem divorciado que vê sua vida toda mudar quando conhece Isabel (Salma Hayek). Ela afirma que o mundo onde vivem não passa de uma simulação tecnológica e que ninguém, além deles, é real. Aos poucos, Greg passa a acreditar em Isabel.</p>
        </b-col>
        <b-col>
          <div class="d-flex justify-content-center">
            <iframe width="598" height="349" src="https://www.youtube.com/embed/ZHtPm8v-yNw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <h4>Elenco</h4>
      <b-row class="text-center">
          <b-col>
            <nuxt-link to="/actor-owen-wilson" class="actor">
              <b-avatar src="~/assets/actor-owen.jpg" size="100px"></b-avatar>
              <p class="mt-2"><strong>Owen Wilson</strong></p>
              <p style="color: gray; font-size: 15px;">Personagem: Greg</p>
            </nuxt-link>
          </b-col>
          <b-col>
            <nuxt-link to="/actor-salma-hayek" class="actor">
              <b-avatar src="~/assets/actor-salma-hayek.jpg" size="100px"></b-avatar>
              <p class="mt-2"><strong>Salma Hayek</strong></p>
              <p style="color: gray; font-size: 15px;">Personagem: Isabel</p>
            </nuxt-link>
          </b-col>
          <b-col>
            <nuxt-link to="/actor-madeline-zima" class="actor">
              <b-avatar src="~/assets/actor-madeline-zima.jpg" size="100px"></b-avatar>
              <p class="mt-2"><strong>Madeline Zima</strong></p>
              <p style="color: gray; font-size: 15px;">Personagem: Doris</p>
            </nuxt-link>
          </b-col>
          <b-col>
            <nuxt-link to="/actor-nesta-cooper" class="actor">
              <b-avatar src="~/assets/actor-nesta-cooper.jpg" size="100px"></b-avatar>
              <p class="mt-2"><strong>Nesta Cooper</strong></p>
              <p style="color: gray; font-size: 15px;">Personagem: Emily</p>
            </nuxt-link>
          </b-col>
        </b-row>
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
</style>
