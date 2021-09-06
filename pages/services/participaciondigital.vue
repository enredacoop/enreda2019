<template>
  <div>
    <PageClaim
      :title="$t('services.service_1')"
      background="bg_participaciondigital"
    />
    <Service slug="participaciondigital" />
    <div class="container">
      <!-- <Functionalities /> -->
      <!-- <GeneralCharacteristicsConsul /> -->
      <!-- <ServiciosConsul /> -->
    </div>
  </div>
</template>
<script>
import PageClaim from '~/components/layout/PageClaim.vue'
import Service from '~/components/service/Service.vue'
// import Functionalities from '~/components/layout/Functionalities.vue'
// import GeneralCharacteristicsConsul from '~/components/layout/GeneralCharacteristicsConsul.vue'
// import ServiciosConsul from '~/components/layout/ServiciosConsul.vue'

export default {
  components: {
    PageClaim,
    Service
    // Functionalities,
    // GeneralCharacteristicsConsul,
    // ServiciosConsul
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
