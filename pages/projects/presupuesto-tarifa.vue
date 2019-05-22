<template>
  <Project slug="presupuesto-tarifa" />
</template>

<script>
import Project from '~/components/Project.vue'

export default {
  components: {
    Project
  },
  nuxtI18n: {
    paths: {
      es: '/proyectos/presupuesto-tarifa',
      en: '/projects/presupuesto-tarifa'
    }
  }
}
</script>
