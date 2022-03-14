<template>
  <Project slug="consulsdg" />
</template>

<script>
import Project from '~/components/project/Project.vue'

export default {
  components: {
    Project
  },
  nuxtI18n: {
    paths: {
      es: '/proyectos/consulsdg',
      en: '/projects/consulsdg'
    }
  }
}
</script>
