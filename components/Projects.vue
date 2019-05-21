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
    "intervencion": "Intervención",
    "analisisdatos": "Análisis de datos",
    "desarrolloproducto": "Desarollo de producto",
    "economiasocial": "Economía social",
    "innovacionsocial": "Innovación social",
    "desarrollotecnologico": "Desarrollo tecnológico",
    "formacion": "Formación",
    "participaciondigital": "Participación digital",
    "planificacion": "Planificación"
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
    "intervencion": "Intervención",
    "analisisdatos": "Análisis de datos",
    "desarrolloproducto": "Desarollo de producto",
    "economiasocial": "Economía social",
    "innovacionsocial": "Innovación social",
    "desarrollotecnologico": "Desarrollo tecnológico",
    "formacion": "Formación",
    "participaciondigital": "Participación digital",
    "planificacion": "Planificación"
  }
}
</i18n>

<template>
  <div id="works" class="wrapper-content">
    <b-container>
      <div>
        <div class="button-group text-center">
          <b-dropdown id="dropdown-filter" text="Aplicar filtro" class="m-md-2">
            <b-dropdown-item
              v-for="(val, key) in option.getFilterData"
              :key="key"
              class="button"
              :class="[key === filterOption ? 'selected' : '']"
              @click="filter(key)"
            >
              {{ $t(key) }}
            </b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
      <hr />

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
          :class="[work.category] + ' col-xs-12 col-sm-12 col-lg-4'"
        >
          <nuxt-link
            :to="
              localePath({
                name: 'projects-slug',
                params: { slug: work.url }
              })
            "
          >
            <div
              :key="work.name"
              class="work"
              :class="
                work.favourite === true
                  ? 'highlighted ' + work.class
                  : work.class
              "
            >
              <div class="work-header">
                <b-img
                  v-if="work.logo != ''"
                  :src="getImageUrl(work.logo)"
                  :alt="work.title"
                />
                <h4 v-else>{{ work.title }}</h4>
              </div>
              <div class="work-body">
                <div class="work-title">
                  {{ work.title }}
                </div>
              </div>
            </div>
          </nuxt-link>
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
      cellsByRow: {
        rowHeight: 270
      },
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
          },
          analisisdatos: function(el) {
            return el.category.includes('analisisdatos')
          },
          desarrolloproducto: function(el) {
            return el.category.includes('desarrolloproducto')
          },
          economiasocial: function(el) {
            return el.category.includes('economiasocial')
          },
          innovacionsocial: function(el) {
            return el.category.includes('innovacionsocial')
          },
          desarrollotecnologico: function(el) {
            return el.category.includes('desarrollotecnologico')
          },
          formacion: function(el) {
            return el.category.includes('formacion')
          },
          participaciondigital: function(el) {
            return el.category.includes('participaciondigital')
          },
          planificacion: function(el) {
            return el.category.includes('planificacion')
          }
        }
      },
      works: [
        {
          title: 'Consul - El Puerto de Santa María',
          logo: 'logo-consul-elpuerto.png',
          class: 'aytoelpuerto',
          url: 'consul-puerto-santa-maria',
          category: ['consul', 'participacion', 'ayuntamiento'],
          favourite: false
        },
        {
          title: 'Consul - Oviedo',
          logo: 'logo-ayto-oviedo.png',
          class: 'decideoviedo',
          url: 'consul-oviedo',
          category: ['consul', 'participacion', 'ayuntamiento'],
          favourite: true
        },
        {
          title: 'Consul - Arcos de la Frontera',
          logo: 'logo-ayto-arcos.png',
          class: 'decidearcos',
          url: 'consul-arcos-frontera',
          category: ['consul', 'participacion', 'ayuntamiento'],
          favourite: false
        },
        {
          title: 'Consul - Santiago de Compostela',
          logo: 'logo-ayto-santiago.png',
          class: 'decidesantiago',
          url: 'consul-santiago',
          category: ['consul', 'participacion', 'ayuntamiento'],
          favourite: false
        },
        {
          title: 'decide.cadiz.es',
          logo: '',
          class: 'decidecadiz',
          url: 'consul-cadiz',
          category: ['consul', 'participacion', 'ayuntamiento'],
          favourite: false
        },
        {
          title: 'TIPI Ciudadano',
          logo: 'logo-tipi.png',
          class: 'tipi',
          url: 'tipi-ciudadano',
          category: ['transparencia', 'analisisdatos'],
          favourite: true
        },
        {
          title: 'LaCentral.coop',
          logo: 'logo-lacentralcoop.png',
          class: 'lacentralcoop',
          url: 'lacentralcoop',
          category: ['desarrolloproducto', 'economiasocial'],
          favourite: false
        },
        {
          title: 'Somos.coop',
          logo: 'logo-somoscoop.png',
          class: 'somoscoop',
          url: 'somoscoop',
          category: ['economiasocial', 'desarrolloproducto'],
          favourite: false
        },
        {
          title: 'Poletika',
          logo: 'logo-poletika.png',
          class: 'poletika',
          url: 'poletika',
          category: ['transparencia'],
          favourite: false
        },
        {
          title: 'Social to Crowd',
          logo: 'logo-stc.png',
          class: 'socialtocrowd',
          url: 'socialtocrowd',
          category: ['innovacionsocial', 'desarrolloproducto'],
          favourite: false
        },
        {
          title: 'Transparencia Presupuestaria',
          logo: 'logo-tp.png',
          class: 'transparenciapresupuestaria',
          url: 'transparencia-presupuestaria',
          category: ['desarrolloproducto', 'transparencia'],
          favourite: false
        },
        {
          title: 'CLIC Cervantes',
          logo: 'logo-cervantes.png',
          class: 'clic',
          url: 'clic-cervantes',
          category: ['desarrollotecnologico'],
          favourite: false
        },
        {
          title: 'Conil Hospeda',
          logo: 'logo-conilhospeda.svg',
          class: 'conilhospeda',
          url: 'conil-hospeda',
          category: [
            'desarrolloproducto',
            'economiasocial',
            'desarrollotecnologico'
          ],
          favourite: false
        },
        {
          title: 'En la Órbita',
          logo: 'logo-elo.png',
          class: 'enlaorbita',
          url: 'enlaorbita',
          category: ['desarrolloproducto', 'desarrollotecnologico'],
          favourite: false
        },
        {
          title: 'ICAS',
          logo: 'logo-icas.png',
          class: 'icas',
          url: 'icas',
          category: ['desarrollotecnologico'],
          favourite: false
        },
        {
          title: 'Festival de Sevilla de Cine',
          logo: 'logo-festivalcine.png',
          class: 'festivalcine',
          url: 'festivalcine',
          category: ['desarrollotecnologico'],
          favourite: false
        },
        {
          title: 'Foro Andaluz de Gobiernos Locales y Procesos Participativos',
          logo: 'logo-foro-participacion.png',
          class: 'foroparticipacion',
          url: 'foro-participacion/',
          category: [
            'presuspuestoparticipativo',
            'participacion',
            'intervencion'
          ],
          favourite: false
        },
        {
          title: 'Reglamento de Participación de la Diputación de Cádiz',
          logo: 'logo-diputacion-cadiz.png',
          class: 'dipuparticipacioncadiz',
          url: 'dipu-participacion-cadiz',
          category: ['transparencia', 'participacion', 'reglamento'],
          favourite: false
        },
        {
          title: 'Reglamento de Participación del Ayuntamiento de Cádiz',
          logo: '',
          class: 'aytoparticipacioncadiz',
          url: 'ayto-participacion-cadiz',
          category: ['transparencia', 'participacion', 'reglamento'],
          favourite: false
        },
        {
          title: 'Formación sobre la Ley Andaluza de Participación',
          logo: '',
          class: 'formacionleyparticipacion',
          url: 'formacion-ley-participacion',
          category: ['formacion', 'participacion'],
          favourite: false
        },
        {
          title: 'Sistema Público de Participación Digital de Andalucía',
          logo: '',
          class: 'sistemaparticipacion',
          url: 'sistema-participacion',
          category: ['consul', 'participacion', 'participaciondigital'],
          favourite: true
        },
        {
          title: 'Participación para la planificación urbanística',
          logo: 'logo-ayto-rota.png',
          class: 'ciudadamable',
          url: 'ciudad-amable',
          category: [
            'participacion',
            'ayuntamiento',
            'intervencion',
            'planificacion'
          ],
          favourite: false
        },
        {
          title: 'Presupuesto Participativos de Marbella',
          logo: 'logo_marbella.png',
          class: 'presupuestomarbella',
          url: 'presupuesto-marbella',
          category: [
            'presuspuestoparticipativo',
            'participacion',
            'ayuntamiento'
          ],
          favourite: false
        },
        {
          title: 'Presupuesto Participativos de Mijas',
          logo: 'logo-ayto-mijas.png',
          class: 'presupuestomijas',
          url: 'presupuesto-mijas',
          category: [
            'consul',
            'presuspuestoparticipativo',
            'participacion',
            'ayuntamiento'
          ],
          favourite: false
        },
        {
          title: 'Plan de intervención',
          logo: 'logo-ayto-coria.png',
          class: 'planintervencion',
          url: 'plan-intervencion',
          category: [
            'participacion',
            'ayuntamiento',
            'intervencion',
            'planificacion'
          ],
          favourite: false
        },
        {
          title: 'Presupuesto Participativo de Tarifa',
          logo: 'logo-ayto-tarifa.png',
          class: 'presupuestotarifa',
          url: 'presupuesto-tarifa',
          category: [
            'presuspuestoparticipativo',
            'participacion',
            'ayuntamiento'
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
