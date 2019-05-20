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
import Services from '~/components/Services.vue'
import Consul from '~/components/Consul.vue'
import Counters from '~/components/Counters.vue'
import News from '~/components/News.vue'
import HomeClaim from '~/components/HomeClaim.vue'
import Clients from '~/components/Clients.vue'

export default {
  components: {
    Services,
    Consul,
    Counters,
    News,
    HomeClaim,
    Clients
  }
}
</script>
