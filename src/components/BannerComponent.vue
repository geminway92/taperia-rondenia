<template>
  <div class="carousel">
    <div id="imagen">
      <img :src="carrusel" alt="Foto Banner">
    </div>
</div>

</template>

<script>

export default {
  data () {
    return {
      imagenes: ['../../assets/tapa.jpg', '../../assets/tapa-1.jpg', '../../assets/tapa-langostinos.jpg'],
      posicionActual: 0,
      carrusel: null
    }
  },

  methods: {
    nextPic () {
      console.log('entra')
      if (this.posicionActual >= this.imagenes.length - 1) {
        this.posicionActual = 0
      } else {
        this.posicionActual++
      }
      this.carrusel = this.imagenes[this.posicionActual]
    },
  },

  created () {
    setInterval(() => {
      this.nextPic()
    }, 4000)
    this.carrusel = this.imagenes[this.posicionActual]
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
