<i18n>
{
  "es": {
    "source_code": "Código fuente",
    "watch_live": "Ver en vivo",
    "technologies": "Tecnologías",
    "some_appearances_media": "Algunas apariciones en medios",
  },
  "en": {
    "source_code": "Source code",
    "watch_live": "Watch live",
    "technologies": "Technologies",
    "some_appearances_media": "Some appearances in media",
  }
}
</i18n>
<template>
  <div>
    <div id="work" :class="project.class + ' wrapper'">
      <section id="intro">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12 text-center">
              <div class="claim">
                <h1>{{ project.title }}</h1>
                <h4>{{ project.subtitle }}</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="data">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 text-center">
              <template v-if="project.own == 'no' || project.own == ''">
                <div class="client">
                  <a class="name" :href="project.clienturl" target="_blank">{{
                    project.clientname
                  }}</a>
                  <br />
                  <span class="description">{{
                    project.clientdescription
                  }}</span>
                  <br />
                  <span class="year"
                    ><font-awesome-icon
                      :icon="['fas', 'calendar']"
                      transform="shrink-6"
                    />
                    {{ project.clientyear }}</span
                  >
                </div>
              </template>
            </div>
            <div v-if="project.screenshot != ''" class="col-12">
              <div class="screenshot text-center">
                <img
                  :src="require('~/assets/images/works/' + project.screenshot)"
                  :alt="project.screenshot"
                />
              </div>
            </div>
            <div class="col-12 text-center">
              <div class="buttons">
                <template v-if="project.url != ''">
                  <a
                    :href="project.url"
                    class="btn btn-primary"
                    target="_blank"
                  >
                    <font-awesome-icon :icon="['fas', 'binoculars']" />
                    {{ $t('watch_live') }}</a
                  >
                  <a
                    v-if="project.sourcecode != ''"
                    :href="project.sourcecode"
                    class="btn btn-primary"
                    target="_blank"
                    ><font-awesome-icon :icon="['fab', 'github']" />
                    {{ $t('source_code') }}</a
                  >
                </template>
              </div>
            </div>
            <div class="col-12 text-center">
              <div class="project-description">
                {{ project.description }}
              </div>
            </div>
            <div class="col-12 text-center">
              <div class="project-description">
                <p v-html="project.body"></p>
              </div>
            </div>
            <div class="col-12">
              <template v-if="project.media.length > 0">
                <section id="media" class="media-line">
                  <div class="container">
                    <div class="row">
                      <div class="col-sm-12 text-center">
                        <h4 class="section-heading">
                          {{ $t('some_appearances_media') }}
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div class="container">
                    <div class="row">
                      <div
                        v-for="(media, index) in project.media"
                        :key="index"
                        class="col-sm-3"
                      >
                        <a
                          :href="media.url"
                          :alt="media.name"
                          :title="media.name"
                          target="_blank"
                        >
                          <div
                            v-if="media.image != ''"
                            :class="'media ' + media.class"
                          >
                            <img
                              :src="
                                require('~/assets/images/media/' + media.image)
                              "
                              :alt="'Logo de ' + media.name"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              </template>
            </div>
            <template v-if="project.technologies != ''">
              <div class="col-12 text-center">
                <div class="technologies">
                  <h4 class="section-heading">{{ $t('technologies') }}</h4>
                  <a
                    v-for="(technology, index) in project.technologies"
                    :key="index"
                    target="_blank"
                    :href="technology.url"
                  >
                    <span class="badge badge-primary">
                      {{ technology.technology }}
                    </span>
                  </a>
                </div>
              </div>
            </template>
          </div>
        </div>
      </section>
      <template v-if="project.keys != ''">
        <section id="keys">
          <div class="container">
            <div class="row">
              <div
                v-for="(key, index) in project.keys"
                :key="index"
                class="col-sm-4"
              >
                <div class="key">{{ key.key }}</div>
              </div>
            </div>
          </div>
        </section>
      </template>
      <template v-if="project.calltoaction.call != ''">
        <section id="call">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 text-center">
                <h4>{{ project.calltoaction.call }}</h4>
              </div>
            </div>
          </div>
        </section>
      </template>
      <template v-if="project.metricsinfo != ''">
        <section id="metrics">
          <div class="container">
            <div class="row text-center">
              <div
                v-for="(metric, index) in project.metrics"
                :key="index"
                class="col-sm-4"
              >
                <h4 class="metric">
                  <span class="value">{{ metric.value }}</span>
                  <br />
                  <span class="text">{{ metric.metric }}</span>
                </h4>
              </div>
            </div>
            <div class="row">
              <div class="col-12 text-center metricsinfo">
                <small>{{ project.metricsinfo }}</small>
              </div>
            </div>
          </div>
        </section>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slug: { type: String, default: '/' }
  },
  computed: {
    project() {
      if (this.$i18n.locale === 'es') {
        return this.$store.state.es.projects.items.find(
          service => service.id === this.slug
        )
      } else {
        return this.$store.state.en.projects.items.find(
          service => service.id === this.slug
        )
      }
    },
    meta() {
      return this.$store.state.meta[this.slug]
    }
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
  }
}
</script>
