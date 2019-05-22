<template>
  <Project slug="lacentralcoop" />
</template>

<script>
import Project from '~/components/Project.vue'

export default {
  components: {
    Project
  },
  nuxtI18n: {
    paths: {
      es: '/proyectos/lacentralcoop',
      en: '/projects/lacentralcoop'
    }
  }
}
</script>
