<i18n>
{
  "es": {
    "cookies_text": "Las cookies nos ayudan a proporcionar nuestros servicios. Usando nuestros servicios, está de acuerdo con nuestro uso de cookies.",
    "learn_more": "Leer más",
    "ok": "Aceptar"
  },
  "en": {
    "cookies_text": "Cookies help us provide our services. Using our services, you agree to our use of cookies.",
    "learn_more": "Learn more",
    "ok": "Ok it"
  }
}
</i18n>
<template>
  <section class="cookies-wrapper">
    <div class="col-sm-12 text-center">
      Las cookies nos ayudan a proporcionar nuestros servicios. Usando nuestros
      servicios, está de acuerdo con nuestro uso de cookies.
      <nuxt-link :to="localePath({ name: 'cookies' })">{{
        $t('learn_more')
      }}</nuxt-link>
      <a href="#" class="btn btn-primary">{{ $t('ok') }}</a>
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
