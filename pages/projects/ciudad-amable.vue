<template>
  <Project slug="ciudad-amable" />
</template>

<script>
import Project from '~/components/Project.vue'

export default {
  components: {
    Project
  },
  nuxtI18n: {
    paths: {
      es: '/proyectos/ciudad-amable',
      en: '/projects/ciudad-amable'
    }
  }
}
</script>
