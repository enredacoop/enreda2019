<template>
  <Project slug="tipi-ciudadano" />
</template>

<script>
import Project from '~/components/project/Project.vue'

export default {
  components: {
    Project
  },
  nuxtI18n: {
    paths: {
      es: '/proyectos/tipi-ciudadano',
      en: '/projects/tipi-ciudadano'
    }
  }
}
</script>
