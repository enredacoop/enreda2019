<template>
  <div class="">
    <PageClaim :title="error" />
    <div class="row m-0">
      <div class="container">
        <div class="col-md-12 text-center mbt-120">
          <h2>{{ oops }}</h2>
          <h3>{{ message }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageClaim from '~/components/PageClaim.vue'

export default {
  components: {
    PageClaim
  },
  props: {
    error: { type: String, default: 'Error 404' },
    oops: { type: String, default: '¡Ups!' },
    message: { type: String, default: 'Esta página no existe' }
  }
}
</script>
