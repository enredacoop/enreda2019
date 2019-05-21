<i18n>
{
  "es": {
    "error": "Error 404",
    "oops": "¡Ups!",
    "message": "Esta página no existe"
  },
  "en": {
    "error": "Error 404",
    "oops": "Oops!",
    "message": "This page doesn’t exist"
  }
}
</i18n>
<template>
  <div class="">
    <Base :error="$t('error')" :oops="$t('oops')" :message="$t('message')" />
  </div>
</template>
<script>
import Base from '~/components/error/Base.vue'

export default {
  name: 'Error404',
  components: {
    Base
  },
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
