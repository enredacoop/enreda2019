<i18n>
{
  "es": {
    "error": "Error 500",
    "oops": "¡Ups!",
    "message": "Esta página no funciona"
  },
  "en": {
    "error": "Error 500",
    "oops": "Oops!",
    "message": "This page isn't working"
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
  name: 'Error500',
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
