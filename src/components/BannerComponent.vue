<template>
  <div class="carousel">
    <div id="imagen">
      <img :src="imagenes" alt="Foto Banner">
    </div>
</div>

</template>

<script>

export default {
  data () {
    return {
      imagenes: `../../assets/tapas/1.jpeg`,
      posicionActual: 1,
      carrusel: null
    }
  },

  methods: {
    nextPic () {
      if (this.posicionActual < 40) {
        this.posicionActual++
        } else {
        this.posicionActual = 1
      }
      this.imagenes = `../../assets/tapas/${this.posicionActual}.jpeg`
    },
  },

  created () {
    setInterval(() => {
      this.nextPic()
    }, 4000)
  }
}
</script>

<style scoped>

.carousel {
  position: relative;
  height: 200px;
}

#imagen{
  height: 300px;
}
#imagen img {
  position:absolute;
  top: 0em;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media screen and (min-width: 500px) {
  .carousel, #imagen img{
    height: 400px;
  }

}

@media screen and (min-width: 1000px) {
  .carousel, #imagen img{
    height: 500px;
  }

}

</style>
