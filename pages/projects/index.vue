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
  <Projects />
</template>

<script>
import Projects from '~/components/Projects'

export default {
  components: {
    Projects
  },
  nuxtI18n: {
    paths: {
      es: '/proyectos',
      en: '/projects'
    }
  }
}
</script>
