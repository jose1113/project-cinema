<template>
  <div :class="color">
    <Social-header />
    <Menu />
    <Nuxt />
    <Footer />
  </div>
</template>
<style>
div{
  font-family: 'Raleway', sans-serif;
}
</style>
<script>
  export default {
    data() {
      return {
        colors: ['system', 'light', 'dark', 'sepia']
      }
    }
  }
</script>
