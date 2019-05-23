<template>
  <Service slug="analitica-bigdata" />
</template>

<script>
import Service from '~/components/service/Service.vue'

export default {
  components: {
    Service
  },
  nuxtI18n: {
    paths: {
      es: '/servicios/analitica-bigdata',
      en: '/services/analitica-bigdata'
    }
  }
}
</script>
