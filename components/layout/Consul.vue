<i18n>
{
  "es": {
    "title": "proyectos realizados con Consul",
    "subtitle": "Software libre para la participación ciudadana.",
    "button": "Solicita tu presupuesto"
  },
  "en": {
    "title": "projects carried out with Consul",
    "subtitle": "Free software for citizen participation.",
    "button": "Request your budget"
  }
}
</i18n>
<template>
  <div class="container">
    <div>
      <b-jumbotron class="block-consul">
        <h2>
          <b>13 {{ $t('title') }} </b>
          <span class="subtitle">{{ $t('subtitle') }}</span>
        </h2>
        <b-button variant="primary" href="#">{{ $t('button') }}</b-button>
        <img
          src="~/assets/images/logo_consul.png"
          alt="Consul"
          class="logo_consul"
        />
      </b-jumbotron>
    </div>
  </div>
</template>

<script>
export default {}
</script>
