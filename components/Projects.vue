<i18n>
{
  "es": {
    "projects": "Proyectos",
    "apply_filter": "Aplicar filtro",
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
    "apply_filter": "Apply filter",
    "show all": "Show all",
    "consul": "Consul",
    "presuspuestoparticipativo": "Participatory budgets",
    "transparencia": "Transparency",
    "participacion": "Participation",
    "ayuntamiento": "City Councils",
    "reglamento": "Regulation",
    "intervencion": "Intervention",
    "analisisdatos": "Analysis of data",
    "desarrolloproducto": "Product development",
    "economiasocial": "Social economy",
    "innovacionsocial": "Social innovation",
    "desarrollotecnologico": "Technological development",
    "formacion": "Training",
    "participaciondigital": "Digital participation",
    "planificacion": "Planning"
  }
}
</i18n>

<template>
  <div id="works" class="wrapper-content">
    <b-container>
      <div>
        <div class="button-group text-center">
          <b-dropdown
            id="dropdown-filter"
            :text="$t('apply_filter')"
            class="m-md-2"
          >
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
          <span id="filter-selected" class="primary"></span>
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
          :class="[work.category] + ' col-xs-12 col-sm-6 col-lg-4'"
        >
          <nuxt-link
            :to="
              localePath({
                name: `projects-${work.url}`
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
      }
    }
  },
  computed: {
    orderedWorks: function() {
      return _.orderBy(this.$store.state.works.items, 'favourite').reverse()
    }
  },
  mounted() {
    $('#dropdown-filter ul li').on('click', function() {
      const filter = this.firstElementChild.innerText
      $('#filter-selected')[0].innerText = filter
    })
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
