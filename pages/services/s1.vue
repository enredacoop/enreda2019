<i18n>
{
  "es": {
    "cooperative": "Cooperativa Servicio 1"
  },
  "en": {
    "cooperative": "Cooperative Service 2"
  }
}
</i18n>

<template>
  <section>
    <div>{{ $t('cooperative') }}</div>
  </section>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      es: '/servicios/s1',
      en: '/services/s1'
    }
  }
}
</script>
