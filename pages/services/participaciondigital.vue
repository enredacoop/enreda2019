<template>
  <Service slug="participaciondigital" />
</template>

<script>
import Service from '~/components/Service.vue'

export default {
  components: {
    Service
  },
  nuxtI18n: {
    paths: {
      es: '/servicios/participaciondigital',
      en: '/services/participaciondigital'
    }
  }
}
</script>
