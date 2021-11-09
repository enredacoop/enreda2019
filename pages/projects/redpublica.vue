<template>
  <Project slug="redpublica" />
</template>

<script>
import Project from '~/components/project/Project.vue'

export default {
  components: {
    Project
  },
  nuxtI18n: {
    paths: {
      es: '/proyectos/redpublica',
      en: '/projects/redpublica'
    }
  }
}
</script>
