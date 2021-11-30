<i18n>
{
  "es": {
    "image": "ODS_large.png"
  },
  "en": {
    "image": "SDG_large.png"
  }
}
</i18n>
<template>
  <div>
    <nuxt-link
      :to="
        localePath({
          name: `ods`
          // eslint-disable-next-line prettier/prettier
        })"
      class="table-matrix-link"
    >
      <img
        :src="require('~/assets/images/' + $t('image'))"
        class="img-ods-coop"
        alt="Logo de Objetivos de Desarollo Sostenible"
      />
    </nuxt-link>
  </div>
</template>

<script>
export default {}
</script>
