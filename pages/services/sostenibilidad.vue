<template>
  <div>
    <PageClaim
      :title="$t('services.service_7')"
      background="bg_sostenibilidad"
    />
    <Service slug="sostenibilidad" />
  </div>
</template>

<script>
import PageClaim from '~/components/layout/PageClaim.vue'
import Service from '~/components/service/Service.vue'

export default {
  components: {
    PageClaim,
    Service
  },
  nuxtI18n: {
    paths: {
      es: '/servicios/sostenibilidad',
      en: '/services/sostenibilidad'
    }
  }
}
</script>
