<template>
  <div class="container mt-3">
    <h1>Adicionar filmes - Em breve</h1>
    <b-form-select v-model="selected" :options="options" class="mt-2"></b-form-select>
    <div class="container d-flex justify-content-center mt-2">
      <b-button type="submit" variant="primary mr-3">Enviar</b-button>
      <b-button type="reset" variant="danger">Limpar campos</b-button>
    </div>
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
