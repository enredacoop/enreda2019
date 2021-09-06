<i18n>
{
  "es": {
    "link": "Enlace",
    "placeholder": "Cargando mapa..."
  },
  "en": {
    "link": "Link",
    "placeholder":"Loading map..."
  }
}
</i18n>
<template>
  <div>
    <div id="map-wrap" style="height: 80vh">
      <client-only :placeholder="$t('placeholder')">
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
    </div>
  </div>
</template>

<script>
import consulData from '~/assets/data/geo.json'
import ClientOnly from 'vue-client-only'

export default {
  components: {
    ClientOnly
  },
  data() {
    return {
      consul: consulData
    }
  }
}
</script>
