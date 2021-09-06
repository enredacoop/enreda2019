<template>
  <Project slug="consul-santiago" />
</template>

<script>
import Project from '~/components/project/Project.vue'

export default {
  components: {
    Project
  },
  nuxtI18n: {
    paths: {
      es: '/proyectos/consul-santiago',
      en: '/projects/consul-santiago'
    }
  }
}
</script>
