<i18n>
{
  "es": {
    "counter_1": "días contribuyendo, desde la economía social y solidaria, a transformar la realidad social",
    "counter_2": "proyectos realizados",
    "counter_3": "administraciones públicas han contado con nuestros servicios"
  },
  "en": {
    "counter_1": "days contributing, from the social and solidarity economy, to transform the social reality",
    "counter_2": "fulfilled projects",
    "counter_3": "public administrations have had our services"
  }
}
</i18n>
<template>
  <div id="home-days" class="wrapper-content">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <div class="counter">
            <h2 class="count-title daysnumber"></h2>
            <p class="count-text ">
              {{ $t('counter_1') }}
            </p>
          </div>
        </div>
        <div class="col-sm-12 col-md-4">
          <div class="counter">
            <h2 class="count-title">+ 50</h2>
            <p class="count-text ">{{ $t('counter_2') }}</p>
          </div>
        </div>
        <div class="col-sm-12 col-md-4">
          <div class="counter">
            <h2 class="count-title">+ 30</h2>
            <p class="count-text ">
              {{ $t('counter_3') }}
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
