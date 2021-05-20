<template>
  <div>
    <b-container class="mt-3">
      <hr>
      <h4 style="font-weight: 600;">{{ $t('leaveComment') }}</h4>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-2" :label="$t('name')" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" :label="$t('comentario')" label-for="input-3">
        <b-form-textarea
        id="textarea"
        v-model="form.text"
        rows="3"
        max-rows="6"
      ></b-form-textarea>
      </b-form-group>

      <b-button type="submit" variant="primary" style="font-weight: 600;">{{ $t('addComment') }}</b-button>
      <b-button type="reset" variant="danger" style="font-weight: 600;">{{ $t('clearFields') }}</b-button>
    </b-form>
    <b-card class="mt-3">
      <p class="m-0">{{ form.name }}</p>
      <p class="m-0">{{ form.text }}</p>
    </b-card>
    </b-container>
  </div>
</template>
<script>
export default {
    data() {
      return {
        form: {
          name: '',
          text: '',
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
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
        this.form.name = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>
<style scoped>
  #input-group-3, #input-group-2{
    font-weight: 500;
  }
</style>
