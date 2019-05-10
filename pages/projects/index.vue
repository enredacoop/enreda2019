<i18n>
{
  "es": {
    "projects": "Proyectos"
  },
  "en": {
    "projects": "Projects"
  }
}
</i18n>

<template>
  <section>
    <div>{{ $t('projects') }}</div>
    <nuxt-link :to="localePath('projects-p1')">Proyecto 1</nuxt-link>
    <nuxt-link :to="localePath('services-s1')">Serivicio 1</nuxt-link>
  </section>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      es: '/proyectos',
      en: '/projects'
    }
  }
}
</script>
