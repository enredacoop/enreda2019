<template>
  <section class="cookies-wrapper">
    <div class="col-sm-12 text-center">
      Las cookies nos ayudan a proporcionar nuestros servicios. Usando nuestros
      servicios, está de acuerdo con nuestro uso de cookies.
      <a href="/cookies">Aprender más</a>
      <a href="#" class="btn btn-primary">Aceptar</a>
    </div>
  </section>
</template>

<script>
/* eslint-disable no-undef */

export default {
  mounted() {
    const newThis = this
    if (!newThis.$cookies.get('enreda_cookies')) {
      $('.cookies-wrapper').show()
    }
    $('.cookies-wrapper .btn').on('click', function(e) {
      e.preventDefault()
      newThis.$cookies.set('enreda_cookies', 1)
      $('.cookies-wrapper').hide()
    })
  }
}
</script>
