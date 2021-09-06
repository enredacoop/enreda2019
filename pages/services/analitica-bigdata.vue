<template>
  <div>
    <PageClaim :title="$t('services.service_4')" background="bg_bigdata" />
    <Service slug="analitica-bigdata" />
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
      es: '/servicios/analitica-bigdata',
      en: '/services/analitica-bigdata'
    }
  }
}
</script>
