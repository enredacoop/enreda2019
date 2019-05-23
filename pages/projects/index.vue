<i18n>
{
  "es": {
    "projects": "Proyectos"
  },
  "en": {
    "projects": "Projects"
  }
}
</i18n>

<template>
  <div>
    <PageClaim :title="$t('projects')" background="bg_2" />
    <Projects />
  </div>
</template>

<script>
import Projects from '~/components/project/Projects.vue'
import PageClaim from '~/components/layout/PageClaim.vue'

export default {
  components: {
    Projects,
    PageClaim
  },
  nuxtI18n: {
    paths: {
      es: '/proyectos',
      en: '/projects'
    }
  }
}
</script>
