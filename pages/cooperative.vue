<i18n>
{
  "es": {
    "cooperative": "Cooperativa"
  },
  "en": {
    "cooperative": "Cooperative"
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
      es: '/cooperativa',
      en: '/cooperative'
    }
  }
}
</script>
