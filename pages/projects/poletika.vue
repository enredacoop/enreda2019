<template>
  <Project slug="poletika" />
</template>

<script>
import Project from '~/components/project/Project.vue'

export default {
  components: {
    Project
  },
  nuxtI18n: {
    paths: {
      es: '/proyectos/poletika',
      en: '/projects/poletika'
    }
  }
}
</script>
