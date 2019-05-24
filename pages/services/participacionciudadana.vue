<template>
  <div>
    <PageClaim
      :title="$t('services.service_2')"
      background="bg_participacionciudadana"
    />
    <Service slug="participacionciudadana" />
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
      es: '/servicios/participacionciudadana',
      en: '/services/participacionciudadana'
    }
  }
}
</script>
