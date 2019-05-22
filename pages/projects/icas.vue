<template>
  <Project slug="icas" />
</template>

<script>
import Project from '~/components/Project.vue'

export default {
  components: {
    Project
  },
  nuxtI18n: {
    paths: {
      es: '/proyectos/icas',
      en: '/projects/icas'
    }
  }
}
</script>
