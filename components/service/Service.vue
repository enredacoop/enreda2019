<i18n>
{
  "es": {
    "title": "Proyectos relacionados"
  },
  "en": {
    "title": "Related projects",
  }
}
</i18n>
<template>
  <div>
    <div id="service" :class="service.class + ' wrapper'">
      <section id="data">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-sm-6">
              <div id="client">
                <span class="description">{{ service.description }}</span>
              </div>
            </div>
            <div v-if="service.logo != ''" class="col-12">
              <div class="screenshot text-center">
                <img :src="getImageUrl(service.logo)" :alt="service.title" />
              </div>
            </div>
            <div class="col-12 text-center">
              <div class="buttons">
                <template v-if="service.url != ''">
                  <br />
                  <p>
                    <a
                      :href="service.url"
                      class="btn btn-primary"
                      target="_blank"
                      ><font-awesome-icon :icon="['fas', 'binoculars']" /> Ver
                      en vivo</a
                    >
                  </p>
                </template>
              </div>
            </div>
          </div>
        </div>
      </section>
      <template v-if="service.texts != ''">
        <section id="texts">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-sm-12 col-md-12 col-lg-12">
                <div
                  v-for="(text, index) in service.texts"
                  :key="index"
                  class="block-text"
                >
                  <h2 class="section-heading">{{ text.title }}</h2>
                  <p class="section-body">{{ text.body }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </template>
      <section class="section-fix">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="section-heading">{{ $t('title') }}</h2>
          </div>
        </div>
        <div id="works" class="container">
          <div
            v-for="(work, index) in projects"
            :key="index"
            :class="'item ' + [work.category] + ' col-xs-12 col-sm-6 col-lg-4'"
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
                    :src="getImageUrlAUX(work.logo)"
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
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slug: { type: String, default: '/' }
  },
  head() {
    return {
      title: this.meta.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.meta.description
        },
        { hid: 'keywords', name: 'keywords', content: this.meta.keywords }
      ]
    }
  },
  computed: {
    service() {
      if (this.$i18n.locale === 'es') {
        return this.$store.state.es.services.items.find(
          service => service.id === this.slug
        )
      } else {
        return this.$store.state.en.services.items.find(
          service => service.id === this.slug
        )
      }
    },
    projects() {
      const tags = []
      const res = []
      const newThis = this
      switch (this.slug) {
        case 'participaciondigital':
          tags.push('participaciondigital')
          tags.push('consul')
          break
        case 'participacionciudadana':
          tags.push('participacion')
          tags.push('reglamento')
          tags.push('intervencion')
          break
        case 'disenodesarrolloproducto':
          tags.push('desarrolloproducto')
          break
        case 'analitica-bigdata':
          tags.push('analisisdatos')
          break
        case 'transparencia':
          tags.push('transparencia')
          break
      }
      tags.forEach(function(element) {
        res.push(
          newThis.$store.state.works.items.find(work =>
            work.category.includes(element)
          )
        )
      })
      return res
    },
    meta() {
      return this.$store.state.meta[this.slug]
    }
  },
  methods: {
    getImageUrl(imageId) {
      if (imageId !== '') {
        return require(`~/assets/images/${imageId}`)
      }
    },
    getImageUrlAUX(imageId) {
      return require(`~/assets/images/works/${imageId}`)
    }
  }
}
</script>
