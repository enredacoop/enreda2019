<template>
  <Project slug="somoscoop" />
</template>

<script>
import Project from '~/components/project/Project.vue'

export default {
  components: {
    Project
  },
  nuxtI18n: {
    paths: {
      es: '/proyectos/somoscoop',
      en: '/projects/somoscoop'
    }
  }
}
</script>
