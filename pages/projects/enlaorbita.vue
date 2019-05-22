<template>
  <Project slug="enlaorbita" />
</template>

<script>
import Project from '~/components/Project.vue'

export default {
  components: {
    Project
  },
  nuxtI18n: {
    paths: {
      es: '/proyectos/enlaorbita',
      en: '/projects/enlaorbita'
    }
  }
}
</script>
