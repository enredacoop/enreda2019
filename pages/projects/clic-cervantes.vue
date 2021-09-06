<template>
  <Project slug="clic-cervantes" />
</template>

<script>
import Project from '~/components/project/Project.vue'

export default {
  components: {
    Project
  },
  nuxtI18n: {
    paths: {
      es: '/proyectos/clic-cervantes',
      en: '/projects/clic-cervantes'
    }
  }
}
</script>
