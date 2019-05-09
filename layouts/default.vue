<template>
  <div>
    <Header />
    <nuxt />
    <PreFooter />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import PreFooter from '~/components/PreFooter.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    PreFooter,
    Footer
  }
}
</script>
