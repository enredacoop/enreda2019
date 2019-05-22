<template>
  <Service slug="participacionciudadana" />
</template>

<script>
import Service from '~/components/Service.vue'

export default {
  components: {
    Service
  },
  nuxtI18n: {
    paths: {
      es: '/servicios/participacionciudadana',
      en: '/services/participacionciudadana'
    }
  }
}
</script>
