<template>
  <div id="home-days" class="wrapper-content">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-4">
          <div class="counter">
            <h2 class="count-title daysnumber"></h2>
            <p class="count-text ">
              días contribuyendo, desde la economía social y solidaria, a
              transformar la realidad social.
            </p>
          </div>
        </div>
        <div class="col-xs-12 col-sm-4">
          <div class="counter">
            <h2 class="count-title">+ 50</h2>
            <p class="count-text ">proyectos realizados</p>
          </div>
        </div>
        <div class="col-xs-12 col-sm-4">
          <div class="counter">
            <h2 class="count-title">+ 30</h2>
            <p class="count-text ">
              administraciones públicas han contado con nuestros servicios
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
export default {
  mounted() {
    const oneDay = 24 * 60 * 60 * 1000
    const firstDate = new Date(2008, 2, 21)
    const secondDate = Date.now()
    $('.daysnumber').html(
      Math.round(Math.abs((firstDate.getTime() - secondDate) / oneDay))
    )
  }
}
</script>
