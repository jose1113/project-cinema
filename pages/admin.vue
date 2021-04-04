<template>
  <div class="container mt-3">
    <h1>Adicionar filmes - Em breve</h1>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-select v-model="selected" :options="options" class="mt-2"></b-form-select>
      <div class="container d-flex justify-content-center mt-2">
        <b-button type="submit" variant="primary mr-3">Enviar</b-button>
        <b-button type="reset" variant="danger">Limpar campos</b-button>
      </div>
    </b-form>
  </div>
</template>
<script>
export default {
    data() {
      return {
        form: {
          selected: []
        },
        options: [
          { text: 'Selecione', value: null },
          { text: 'A escavação', value: '~/assets/a-escavacao-vertical.jpg' },
          { text: 'Raya', value: '~/assets/raya-vertical.jpg' }
        ],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.food = null
        this.form.selected = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>
