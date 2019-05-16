<i18n>
{
  "es": {
    "projects": "Proyectos",
    "show all": "Mostrar todos",
    "consul": "Consul",
    "presuspuestoparticipativo": "Presupuestos participativos",
    "transparencia": "Transparencia",
    "participacion": "Participación",
    "ayuntamiento": "Ayuntamientos",
    "reglamento": "Reglamento",
    "intervencion": "Intervención"
  },
  "en": {
    "projects": "Projects",
    "show all": "Mostrar todos",
    "consul": "Consul",
    "presuspuestoparticipativo": "Presupuestos participativos",
    "transparencia": "Transparencia",
    "participacion": "Participación",
    "ayuntamiento": "Ayuntamientos",
    "reglamento": "Reglamento",
    "intervencion": "Intervención"
  }
}
</i18n>

<template>
  <div id="works" class="wrapper-content">
    <b-container>
      <div>
        <h1>{{ $t('projects') }}</h1>
        <div class="button-group">
          <button
            v-for="(val, key) in option.getFilterData"
            :key="val"
            class="button"
            :class="[key === filterOption ? 'is-checked' : '']"
            @click="filter(key)"
          >
            {{ $t(key) }}
          </button>
        </div>
      </div>

      <isotope
        id="root_isotope1"
        ref="cpt"
        :item-selector="'element-item'"
        :list="orderedWorks"
        :options="option"
        @filter="filterOption = arguments[0]"
        @sort="sortOption = arguments[0]"
        @layout="currentLayout = arguments[0]"
      >
        <div
          v-for="(work, index) in orderedWorks"
          :key="index"
          :class="[work.category] + ' col-xs-12 col-sm-6 col-lg-4'"
        >
          <a href="#" :alt="work.title" :title="work.title">
            <div :key="work.name" :class="'work ' + work.class">
              <b-img
                v-if="work.logo != ''"
                :src="getImageUrl(work.logo)"
                :alt="work.title"
              />
              <h4 v-else>{{ work.title }}</h4>
            </div>
          </a>
        </div>
      </isotope>
    </b-container>
  </div>
</template>

<script>
/* eslint-disable no-undef */
/* eslint-disable no-console */

import _ from 'lodash'

export default {
  nuxtI18n: {
    paths: {
      es: '/proyectos',
      en: '/projects'
    }
  },
  data() {
    return {
      currentLayout: 'masonry',
      selected: null,
      sortOption: 'original-order',
      filterOption: 'show all',
      option: {
        itemSelector: '.element-item',
        getFilterData: {
          'show all': function() {
            return true
          },
          consul: function(el) {
            return el.category.includes('consul')
          },
          presuspuestoparticipativo: function(el) {
            return el.category.includes('presuspuestoparticipativo')
          },
          transparencia: function(el) {
            return el.category.includes('transparencia')
          },
          participacion: function(el) {
            return el.category.includes('participacion')
          },
          ayuntamiento: function(el) {
            return el.category.includes('ayuntamiento')
          },
          reglamento: function(el) {
            return el.category.includes('reglamento')
          },
          intervencion: function(el) {
            return el.category.includes('intervencion')
          }
        }
      },
      works: [
        {
          title: 'Consul - El Puerto de Santa María',
          logo: 'logo-consul-elpuerto.png',
          class: 'aytoelpuerto',
          url: '/trabajos/consul-puerto-santa-maria',
          category: [
            'consul',
            'presuspuestoparticipativo',
            'transparencia',
            'participacion',
            'ayuntamiento',
            'reglamento',
            'intervencion'
          ],
          favourite: false
        },
        {
          title: 'Consul - Oviedo',
          logo: 'logo-ayto-oviedo.png',
          class: 'decideoviedo',
          url: '/trabajos/consul-oviedo',
          category: [
            'consul',
            'presuspuestoparticipativo',
            'transparencia',
            'participacion',
            'ayuntamiento',
            'reglamento',
            'intervencion'
          ],
          favourite: false
        },
        {
          title: 'Consul - Arcos de la Frontera',
          logo: 'logo-ayto-arcos.png',
          class: 'decidearcos',
          url: '/trabajos/consul-arcos-frontera',
          category: [
            'consul',
            'presuspuestoparticipativo',
            'transparencia',
            'participacion',
            'ayuntamiento',
            'reglamento',
            'intervencion'
          ],
          favourite: false
        },
        {
          title: 'Consul - Santiago de Compostela',
          logo: 'logo-ayto-santiago.png',
          class: 'decidesantiago',
          url: '/trabajos/consul-santiago',
          category: [
            'consul',
            'presuspuestoparticipativo',
            'transparencia',
            'participacion',
            'ayuntamiento',
            'reglamento',
            'intervencion'
          ],
          favourite: true
        },
        {
          title: 'decide.cadiz.es',
          logo: '',
          class: 'decidecadiz',
          url: '/trabajos/consul-cadiz',
          category: [
            'consul',
            'presuspuestoparticipativo',
            'transparencia',
            'participacion',
            'ayuntamiento',
            'reglamento',
            'intervencion'
          ],
          favourite: false
        },
        {
          title: 'TIPI Ciudadano',
          logo: 'logo-tipi.png',
          class: 'tipi',
          url: '/trabajos/tipi-ciudadano',
          category: [
            'consul',
            'presuspuestoparticipativo',
            'transparencia',
            'participacion',
            'ayuntamiento',
            'reglamento',
            'intervencion'
          ],
          favourite: false
        },
        {
          title: 'LaCentral.coop',
          logo: 'logo-lacentralcoop.png',
          class: 'lacentralcoop',
          url: '/trabajos/lacentralcoop',
          category: [
            'consul',
            'presuspuestoparticipativo',
            'transparencia',
            'participacion',
            'ayuntamiento',
            'reglamento',
            'intervencion'
          ],
          favourite: false
        },
        {
          title: 'Somos.coop',
          logo: 'logo-somoscoop.png',
          class: 'somoscoop',
          url: '/trabajos/somoscoop',
          category: [
            'consul',
            'presuspuestoparticipativo',
            'transparencia',
            'participacion',
            'ayuntamiento',
            'reglamento',
            'intervencion'
          ],
          favourite: false
        },
        {
          title: 'Poletika',
          logo: 'logo-poletika.png',
          class: 'poletika',
          url: '/trabajos/poletika',
          category: [
            'consul',
            'presuspuestoparticipativo',
            'transparencia',
            'participacion',
            'ayuntamiento',
            'reglamento',
            'intervencion'
          ],
          favourite: false
        },
        {
          title: 'Social to Crowd',
          logo: 'logo-stc.png',
          class: 'socialtocrowd',
          url: '/trabajos/socialtocrowd',
          category: [
            'consul',
            'presuspuestoparticipativo',
            'transparencia',
            'participacion',
            'ayuntamiento',
            'reglamento',
            'intervencion'
          ],
          favourite: false
        },
        {
          title: 'Transparencia Presupuestaria',
          logo: 'logo-tp.png',
          class: 'transparenciapresupuestaria',
          url: '/trabajos/transparencia-presupuestaria',
          category: [
            'consul',
            'presuspuestoparticipativo',
            'transparencia',
            'participacion',
            'ayuntamiento',
            'reglamento',
            'intervencion'
          ],
          favourite: false
        },
        {
          title: 'CLIC Cervantes',
          logo: 'logo-cervantes.png',
          class: 'clic',
          url: '/trabajos/clic-cervantes',
          category: [
            'consul',
            'presuspuestoparticipativo',
            'transparencia',
            'participacion',
            'ayuntamiento',
            'reglamento',
            'intervencion'
          ],
          favourite: false
        },
        {
          title: 'Conil Hospeda',
          logo: 'logo-conilhospeda.svg',
          class: 'conilhospeda',
          url: '/trabajos/conil-hospeda',
          category: [
            'consul',
            'presuspuestoparticipativo',
            'transparencia',
            'participacion',
            'ayuntamiento',
            'reglamento',
            'intervencion'
          ],
          favourite: false
        },
        {
          title: 'En la Órbita',
          logo: 'logo-elo.png',
          class: 'enlaorbita',
          url: '/trabajos/enlaorbita',
          category: [
            'consul',
            'presuspuestoparticipativo',
            'transparencia',
            'participacion',
            'ayuntamiento',
            'reglamento',
            'intervencion'
          ],
          favourite: false
        },
        {
          title: 'ICAS',
          logo: 'logo-icas.png',
          class: 'icas',
          url: '/trabajos/icas',
          category: [
            'consul',
            'presuspuestoparticipativo',
            'transparencia',
            'participacion',
            'ayuntamiento',
            'reglamento',
            'intervencion'
          ],
          favourite: false
        },
        {
          title: 'Festival de Sevilla de Cine',
          logo: 'logo-festivalcine.png',
          class: 'festivalcine',
          url: '/trabajos/festivalcine',
          category: [
            'consul',
            'presuspuestoparticipativo',
            'transparencia',
            'participacion',
            'ayuntamiento',
            'reglamento',
            'intervencion'
          ],
          favourite: true
        },
        {
          title: 'Foro Andaluz de Gobiernos Locales y Procesos Participativos',
          logo: 'logo-foro-participacion.png',
          class: 'foroparticipacion',
          url: '/trabajos/foro-participacion/',
          category: [
            'consul',
            'presuspuestoparticipativo',
            'transparencia',
            'participacion',
            'ayuntamiento',
            'reglamento',
            'intervencion'
          ],
          favourite: false
        },
        {
          title: 'Reglamento de Participación de la Diputación de Cádiz',
          logo: 'logo-diputacion-cadiz.png',
          class: 'dipuparticipacioncadiz',
          url: '/trabajos/dipu-participacion-cadiz',
          category: [
            'consul',
            'presuspuestoparticipativo',
            'transparencia',
            'participacion',
            'ayuntamiento',
            'reglamento',
            'intervencion'
          ],
          favourite: false
        },
        {
          title: 'Reglamento de Participación del Ayuntamiento de Cádiz',
          logo: '',
          class: 'aytoparticipacioncadiz',
          url: '/trabajos/ayto-participacion-cadiz',
          category: [
            'consul',
            'presuspuestoparticipativo',
            'transparencia',
            'participacion',
            'ayuntamiento',
            'reglamento',
            'intervencion'
          ],
          favourite: false
        },
        {
          title: 'Formación sobre la Ley Andaluza de Participación',
          logo: '',
          class: 'formacionleyparticipacion',
          url: '/trabajos/formacion-ley-participacion',
          category: [
            'consul',
            'presuspuestoparticipativo',
            'transparencia',
            'participacion',
            'ayuntamiento',
            'reglamento',
            'intervencion'
          ],
          favourite: false
        },
        {
          title: 'Sistema Público de Participación Digital de Andalucía',
          logo: '',
          class: 'sistemaparticipacion',
          url: '/trabajos/sistema-participacion',
          category: [
            'consul',
            'presuspuestoparticipativo',
            'transparencia',
            'participacion',
            'ayuntamiento',
            'reglamento',
            'intervencion'
          ],
          favourite: false
        },
        {
          title: 'Participación para la planificación urbanística',
          logo: 'logo-ayto-rota.png',
          class: 'ciudadamable',
          url: '/trabajos/ciudad-amable',
          category: [
            'consul',
            'presuspuestoparticipativo',
            'transparencia',
            'participacion',
            'ayuntamiento',
            'reglamento',
            'intervencion'
          ],
          favourite: true
        },
        {
          title: 'Presupuesto Participativos de Marbella',
          logo: 'logo_marbella.png',
          class: 'presupuestomarbella',
          url: '/trabajos/presupuesto-marbella',
          category: [
            'consul',
            'presuspuestoparticipativo',
            'transparencia',
            'participacion',
            'ayuntamiento',
            'reglamento',
            'intervencion'
          ],
          favourite: false
        },
        {
          title: 'Presupuesto Participativos de Mijas',
          logo: 'logo-ayto-mijas.png',
          class: 'presupuestomijas',
          url: '/trabajos/presupuesto-mijas',
          category: [
            'consul',
            'presuspuestoparticipativo',
            'transparencia',
            'participacion',
            'ayuntamiento',
            'reglamento',
            'intervencion'
          ],
          favourite: false
        },
        {
          title: 'Plan de intervención',
          logo: 'logo-ayto-coria.png',
          class: 'planintervencion',
          url: '/trabajos/plan-intervencion',
          category: [
            'consul',
            'presuspuestoparticipativo',
            'transparencia',
            'participacion',
            'ayuntamiento',
            'reglamento',
            'intervencion'
          ],
          favourite: true
        },
        {
          title: 'Presupuesto Participativo de Tarifa',
          logo: 'logo-ayto-tarifa.png',
          class: 'presupuestotarifa',
          url: '/trabajos/presupuesto-tarifa',
          category: [
            'consul',
            'presuspuestoparticipativo',
            'transparencia',
            'participacion',
            'ayuntamiento',
            'reglamento',
            'intervencion'
          ],
          favourite: false
        }
      ]
    }
  },
  computed: {
    orderedWorks: function() {
      return _.orderBy(this.works, 'favourite').reverse()
    }
  },
  methods: {
    filter: function(key) {
      this.$refs.cpt.filter(key)
    },
    getImageUrl(imageId) {
      return require(`~/assets/images/works/${imageId}`)
    }
  }
}
</script>
