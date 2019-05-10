<i18n>
{
  "es": {
    "cooperative": "Cooperativa Proyecto 1"
  },
  "en": {
    "cooperative": "Cooperative Project 1"
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
      es: '/proyectos/p1',
      en: '/projects/p1'
    }
  }
}
</script>
