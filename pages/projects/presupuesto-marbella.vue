<template>
  <Project slug="presupuesto-marbella" />
</template>

<script>
import Project from '~/components/Project.vue'

export default {
  components: {
    Project
  },
  nuxtI18n: {
    paths: {
      es: '/proyectos/presupuesto-marbella',
      en: '/projects/presupuesto-marbella'
    }
  }
}
</script>
