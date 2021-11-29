<i18n>
{
  "es": {
    "image": "ods_logo.png"
  },
  "en": {
    "image": "ods_logo_english.png"
  }
}
</i18n>
<template>
  <div class="wrapper-newsletter bg-black">
    <div class="container">
      <div class="row">
        <div class="logos-footer">
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
              class="pull-right"
              width="240px"
              alt="Logo de Objetivos de Desarollo Sostenible"
            />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
