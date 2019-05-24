<template>
  <div>
    <PageClaim
      :title="$t('services.service_1')"
      background="bg_participaciondigital"
    />
    <Service slug="participaciondigital" />
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
      es: '/servicios/participaciondigital',
      en: '/services/participaciondigital'
    }
  },
  computed: {
    service() {
      if (this.$i18n.locale === 'es') {
        return this.$store.state.es.services.items.find(
          service => service.id === 'participaciondigital'
        )
      } else {
        return this.$store.state.en.services.items.find(
          service => service.id === 'participaciondigital'
        )
      }
    }
  }
}
</script>
