<template>
  <Project slug="transparencia-presupuestaria" />
</template>

<script>
import Project from '~/components/project/Project.vue'

export default {
  components: {
    Project
  },
  nuxtI18n: {
    paths: {
      es: '/proyectos/transparencia-presupuestaria',
      en: '/projects/transparencia-presupuestaria'
    }
  }
}
</script>
