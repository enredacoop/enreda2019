<i18n>
{
  "es": {
    "title": "CONSUL - Instituciones a las que hemos ayudado en su participación digital",
    "subtitle": "Software libre para la participación ciudadana.",
    "button": "Solicita tu presupuesto",
  },
  "en": {
    "title": "CONSUL - Institutions we have helped in their digital participation",
    "subtitle": "Free software for citizen participation.",
    "button": "Request your budget",
  }
}
</i18n>
<template>
  <div class="container">
    <div class="col-12 text-center">
      <h2 class="section-heading" style="font-size:1.8rem;">
        {{ $t('title') }}
      </h2>
    </div>
    <Map />
    <!-- <b-jumbotron class="block-consul">
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
      <div id="map-wrap" style="height: 80vh">
        <client-only placeholder="Loading map...">
          <l-map :zoom="2" :center="[36.52986288603547, -6.292999444147041]">
            <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png">
            </l-tile-layer>
            <p v-for="project in consul" :key="project.id">
              <l-marker :lat-lng="[project.latitud, project.longitud]">
                <l-popup>
                  <font-awesome-layers class="fa-2x">
                    <font-awesome-icon
                      :icon="['fas', 'university']"
                      style="color:#FC3D0F"
                    />
                  </font-awesome-layers>
                  {{ project.cliente }} <br /><br />
                  <a
                    :href="project.link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {{ $t('link') }}
                    <font-awesome-icon
                      :icon="['fas', 'external-link-alt']"
                      transform="shrink-5"
                      class="blog-icon"
                    />
                  </a>
                </l-popup>
                <l-icon
                  iconUrl="https://i.ibb.co/h74N4jZ/icon-consul-big.png"
                ></l-icon>
              </l-marker>
            </p>
          </l-map>
        </client-only>
      </div> -->
  </div>
</template>
<script>
import Map from '~/components/layout/Map.vue'

export default {
  components: {
    Map
  }
}
</script>
