<template>
  <footer class="text-white rounded-top text-center mt-3">
    <b-container>
      <b-nav-text>Copyright © 2021</b-nav-text>
    </b-container>
  </footer>
</template>

<style scoped>
img{
  width: 100px;
  height: 100px;
}
footer{
  bottom: 0;
  background-image: linear-gradient(to right bottom, #414141, #4f4f4f, #5d5d5d, #6d6b6c, #7c7a7a);
}
.logo{
  width: 200px;
  height: 120px;
}
@media(max-width:576px){
  .logo{
    width: 80px;
    height: 80px;
  }
}
</style>
