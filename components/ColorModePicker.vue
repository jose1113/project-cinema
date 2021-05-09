<template>
  <div>
    <ul>
      <li class="d-inline-flex mr-5"
      v-for="color of colors"
      :key="color"
      @click="$colorMode.preference = color"
      >
        {{ color }}
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        colors: ['system', 'light', 'dark', 'sepia']
      }
    }
  }
</script>
