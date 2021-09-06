<template>
  <Project slug="eurovelo" />
</template>

<script>
import Project from '~/components/project/Project.vue'

export default {
  components: {
    Project
  },
  nuxtI18n: {
    paths: {
      es: '/proyectos/eurovelo',
      en: '/projects/eurovelo'
    }
  }
}
</script>
