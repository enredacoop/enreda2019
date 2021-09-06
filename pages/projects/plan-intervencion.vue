<template>
  <Project slug="plan-intervencion" />
</template>

<script>
import Project from '~/components/project/Project.vue'

export default {
  components: {
    Project
  },
  nuxtI18n: {
    paths: {
      es: '/proyectos/plan-intervencion',
      en: '/projects/plan-intervencion'
    }
  }
}
</script>
