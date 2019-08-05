<i18n>
{
  "es": {
    "title": "Clientes de referencia",
    "button": "Contacta"
  },
  "en": {
    "title": "Reference customers",
    "button": "Contact"
  }
}
</i18n>
<template>
  <div class="container">
    <div id="clients" class="wrapper clients">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="section-heading">{{ $t('title') }}</h2>
        </div>
      </div>
      <div class="container">
        <div class="wrapper">
          <div class="client">
            <img class="logo" src="~/assets/images/clients/unpd_somalia.png" />
          </div>
          <div class="client">
            <img
              class="logo"
              src="~/assets/images/clients/junta_andalucia.png"
            />
          </div>
          <div class="client">
            <img
              class="logo"
              src="~/assets/images/clients/comunidad_madrid.png"
            />
          </div>
          <div class="client">
            <img
              class="logo"
              src="~/assets/images/clients/ayuntamiento_sevilla.png"
            />
          </div>
          <div class="client">
            <img
              class="logo"
              src="~/assets/images/clients/ayuntamiento_santiago.png"
            />
          </div>
          <div class="client">
            <img
              class="logo"
              src="~/assets/images/clients/ayuntamiento_valencia.png"
            />
          </div>
          <div class="client">
            <img
              class="logo"
              src="~/assets/images/clients/ayuntamiento_oviedo.png"
            />
          </div>
          <div class="client">
            <img
              class="logo"
              src="~/assets/images/clients/ayuntamiento_cordoba.png"
            />
          </div>
          <div class="client">
            <img
              class="logo"
              src="~/assets/images/clients/ayuntamiento_granada.png"
            />
          </div>
          <div class="client">
            <img
              class="logo"
              src="~/assets/images/clients/ayuntamiento_cadiz.png"
            />
          </div>
          <div class="client">
            <img
              class="logo"
              src="~/assets/images/clients/ayuntamiento_marbella.png"
            />
          </div>
          <div class="client">
            <img
              class="logo"
              src="~/assets/images/clients/ayuntamiento_mijas.png"
            />
          </div>
          <div class="client">
            <img
              class="logo"
              src="~/assets/images/clients/ayuntamiento_utrera.png"
            />
          </div>
          <div class="client">
            <img
              class="logo"
              src="~/assets/images/clients/oxfan_intermon.png"
            />
          </div>
          <div class="client">
            <img class="logo" src="~/assets/images/clients/poletika.png" />
          </div>
          <div class="client">
            <img
              class="logo"
              src="~/assets/images/clients/instituto_cervantes.png"
            />
          </div>
          <div class="client">
            <img class="logo" src="~/assets/images/clients/aneca.png" />
          </div>
          <div class="client">
            <img class="logo" src="~/assets/images/clients/cje.png" />
          </div>
          <div class="client">
            <img class="logo" src="~/assets/images/clients/agencia_idea.png" />
          </div>
          <div class="client">
            <img class="logo" src="~/assets/images/clients/medialab_ugr.png" />
          </div>
          <div class="client">
            <img
              class="logo"
              src="~/assets/images/clients/universidad_la_laguna.png"
            />
          </div>
          <div class="client">
            <img
              class="logo"
              src="~/assets/images/clients/universidad_westminster.png"
            />
          </div>
          <div class="client">
            <img class="logo" src="~/assets/images/clients/som_energia.png" />
          </div>
          <div class="client">
            <img class="logo" src="~/assets/images/clients/famp.png" />
          </div>
          <div class="client">
            <img class="logo" src="~/assets/images/clients/ciecode.png" />
          </div>
          <div class="client">
            <img class="logo" src="~/assets/images/clients/innoves.png" />
          </div>
          <div class="client">
            <img class="logo" src="~/assets/images/clients/faecta.png" />
          </div>
          <div class="client">
            <img class="logo" src="~/assets/images/clients/famsi.png" />
          </div>
          <div class="client">
            <img class="logo" src="~/assets/images/clients/reas.png" />
          </div>
          <div class="client">
            <img
              class="logo"
              src="~/assets/images/clients/diputacion_malaga.png"
            />
          </div>
          <div class="client">
            <img
              class="logo"
              src="~/assets/images/clients/diputacion_cadiz.png"
            />
          </div>
          <div class="client contact">
            <p>
              <nuxt-link
                :to="localePath({ name: 'contact' })"
                class="btn btn-primary"
                >{{ $t('button') }}</nuxt-link
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
