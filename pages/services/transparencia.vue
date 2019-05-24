<template>
  <div>
    <PageClaim
      :title="$t('services.service_5')"
      background="bg_transparencia"
    />
    <Service slug="transparencia" />
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
      es: '/servicios/transparencia',
      en: '/services/transparencia'
    }
  }
}
</script>
