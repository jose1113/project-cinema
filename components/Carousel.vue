<template>
  <div>
    <b-carousel
      class="mt-3 rounded"
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >

      <!-- Slides with image only -->
      <nuxt-link to="/kong-ilha-da-caveira"><b-carousel-slide img-src="~/assets/kong-cartaz.png"></b-carousel-slide></nuxt-link>
      <nuxt-link to="/nova-ordem-espacial"><b-carousel-slide img-src="~/assets/nova-ordem-espacial-cartaz.png"></b-carousel-slide></nuxt-link>
    </b-carousel>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>
