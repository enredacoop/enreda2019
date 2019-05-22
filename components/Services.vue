<i18n>
{
  "es": {
    "services": "Servicios",
    "service_1": "Participación Digital",
    "service_2": "Participación Ciudadana",
    "service_3": "Diseño y Desarrollo de Productos",
    "service_4": "Analítica - Big Data",
    "service_5": "Transparencia",
    "service_6": "Edusi",
  },
  "en": {
    "services": "Services",
    "service_1": "Digital Participation",
    "service_2": "Citizen Participation",
    "service_3": "Design and Development of Products",
    "service_4": "Analytic - Big Data",
    "service_5": "Transparency",
    "service_6": "Edusi",
  }
}
</i18n>
<template>
  <div class="container ptb-120">
    <div class="row">
      <div class="col-12 text-center">
        <h2 class="section-heading">{{ $t('services') }}</h2>
      </div>
    </div>
    <div class="card-deck">
      <div class="card">
        <div class="card-icon">
          <font-awesome-icon
            :icon="['fas', 'mobile-alt']"
            transform="shrink-6"
            class="black"
          />
        </div>
        <div class="card-body">
          <h5 class="card-title text-center">{{ $t('service_1') }}</h5>
          <nuxt-link
            class="btn btn-hidden stretched-link"
            :to="
              localePath({
                name: 'services-participaciondigital'
              })
            "
          ></nuxt-link>
        </div>
      </div>
      <div class="card">
        <div class="card-icon">
          <font-awesome-icon
            :icon="['fas', 'hands-helping']"
            transform="shrink-6"
            class="black"
          />
        </div>
        <div class="card-body">
          <h5 class="card-title text-center">{{ $t('service_2') }}</h5>
          <nuxt-link
            class="btn btn-hidden stretched-link"
            :to="
              localePath({
                name: 'services-participacionciudadana'
              })
            "
          ></nuxt-link>
        </div>
      </div>
      <div class="card">
        <div class="card-icon">
          <font-awesome-icon
            :icon="['fas', 'code']"
            transform="shrink-6"
            class="black"
          />
        </div>
        <div class="card-body">
          <h5 class="card-title text-center">
            {{ $t('service_3') }}
          </h5>
          <nuxt-link
            class="btn btn-hidden stretched-link"
            :to="
              localePath({
                name: 'services-disenodesarrolloproducto'
              })
            "
          ></nuxt-link>
        </div>
      </div>
      <div class="card">
        <div class="card-icon">
          <font-awesome-icon
            :icon="['fas', 'chart-line']"
            transform="shrink-6"
            class="black"
          />
        </div>
        <div class="card-body">
          <h5 class="card-title text-center">{{ $t('service_4') }}</h5>
          <nuxt-link
            class="btn btn-hidden stretched-link"
            :to="
              localePath({
                name: 'services-analitica-bigdata'
              })
            "
          ></nuxt-link>
        </div>
      </div>
      <div class="card">
        <div class="card-icon">
          <font-awesome-icon
            :icon="['fas', 'door-open']"
            transform="shrink-6"
            class="black"
          />
        </div>
        <div class="card-body">
          <h5 class="card-title text-center">{{ $t('service_5') }}</h5>
          <nuxt-link
            class="btn btn-hidden stretched-link"
            :to="
              localePath({
                name: 'services-transparencia'
              })
            "
          ></nuxt-link>
        </div>
      </div>
      <div class="card">
        <div class="card-image text-center">
          <img
            :src="require('~/assets/images/services/edusi.png')"
            class="edusi"
          />
        </div>
        <div class="card-body">
          <h5 class="card-title text-center">{{ $t('service_6') }}</h5>
          <a
            href="http://edusi.eu/"
            target="_blank"
            class="btn btn-hidden stretched-link"
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
