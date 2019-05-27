<template>
  <div>
    <HomeClaim />
    <Services />
    <Consul />
    <Clients />
    <News />
    <Counters />
  </div>
</template>

<script>
import Services from '~/components/service/Services.vue'
import Consul from '~/components/layout/Consul.vue'
import Counters from '~/components/layout/Counters.vue'
import News from '~/components/layout/News.vue'
import HomeClaim from '~/components/layout/HomeClaim.vue'
import Clients from '~/components/layout/Clients.vue'

export default {
  components: {
    Services,
    Consul,
    Counters,
    News,
    HomeClaim,
    Clients
  },
  head() {
    return {
      title: this.meta.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.meta.description
        },
        { hid: 'keywords', name: 'keywords', content: this.meta.keywords }
      ]
    }
  },
  computed: {
    meta() {
      return this.$store.state.meta.home
    }
  }
}
</script>
