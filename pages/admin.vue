<template>
  <div class="container mt-3">
    <h1>Adicionar filmes</h1>
    <b-form-select v-model="selected" :options="options" class="mt-3"></b-form-select>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        selected: null,
        options: [
          { value: null, text: 'Selecione uma imagem' },
          { value: require('~/assets/blood.jpg'), text: 'Blood' },
          { value: require('~/assets/kong-cartaz.jpg'), text: 'Kong' },
          { value: require('~/assets/a-escavacao-horizontal.jpg'), text: 'A escavação' },
        ]
      }
    }
  }
</script>
