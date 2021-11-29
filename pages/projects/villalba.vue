<template>
  <Project slug="villalba" />
</template>

<script>
import Project from '~/components/project/Project.vue'

export default {
  components: {
    Project
  },
  nuxtI18n: {
    paths: {
      es: '/proyectos/villalba',
      en: '/projects/villalba'
    }
  }
}
</script>
