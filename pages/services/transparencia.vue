<template>
  <Service slug="transparencia" />
</template>

<script>
import Service from '~/components/service/Service.vue'

export default {
  components: {
    Service
  },
  nuxtI18n: {
    paths: {
      es: '/servicios/transparencia',
      en: '/services/transparencia'
    }
  }
}
</script>
