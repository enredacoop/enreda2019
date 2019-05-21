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
    <PageClaim :title="$t('projects')" background="bg_1" />
    <Projects />
  </div>
</template>

<script>
import Projects from '~/components/Projects'
import PageClaim from '~/components/PageClaim'

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
