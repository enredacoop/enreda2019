<template>
  <Project slug="proyectoindex" />
</template>

<script>
import Project from '~/components/project/Project.vue'

export default {
  components: {
    Project
  },
  nuxtI18n: {
    paths: {
      es: '/proyectos/proyectoindex',
      en: '/projects/proyectoindex'
    }
  }
}
</script>
