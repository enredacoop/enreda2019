<template>
  <Project slug="festivalcine" />
</template>

<script>
import Project from '~/components/project/Project.vue'

export default {
  components: {
    Project
  },
  nuxtI18n: {
    paths: {
      es: '/proyectos/festivalcine',
      en: '/projects/festivalcine'
    }
  }
}
</script>
