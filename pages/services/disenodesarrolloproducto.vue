<template>
  <div>
    <PageClaim
      :title="$t('services.service_3')"
      background="bg_participaciondigital"
    />
    <Service slug="disenodesarrolloproducto" />
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
      es: '/servicios/disenodesarrolloproducto',
      en: '/services/disenodesarrolloproducto'
    }
  }
}
</script>
