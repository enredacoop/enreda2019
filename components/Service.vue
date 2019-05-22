<template>
  <div id="work" :class="service.class + ' wrapper'">
    <section id="intro">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 text-center logo wow pulse">
            <img :src="getImageUrl(service.logo)" :alt="service.title" />
          </div>
        </div>
      </div>
    </section>
    <section id="info">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 wow fadeInLeft">
            <h2>{{ service.subtitle }}</h2>
            <hr />
            <p>{{ service.description }}</p>
            <template v-if="service.url != ''">
              <br />
              <p>
                <a :href="service.url" class="btn btn-default" target="_blank"
                  ><i class="fa fa-binoculars"></i> Ver en vivo</a
                >
              </p>
            </template>
          </div>
        </div>
      </div>
    </section>
    <template v-if="service.texts != ''">
      <section id="texts">
        <div class="container">
          <div class="row">
            <div
              v-for="(text, index) in service.texts"
              :key="index"
              class="col-sm-8"
              style="color:black"
            >
              <h2>{{ text.title }}</h2>
              <p>{{ text.body }}</p>
            </div>
          </div>
        </div>
      </section>
    </template>
    <div
      v-for="(work, index) in projects"
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
            work.favourite === true ? 'highlighted ' + work.class : work.class
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
</template>

<script>
export default {
  props: {
    slug: { type: String, default: '/' }
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
      const res = []
      res.push(
        this.$store.state.works.items.find(work =>
          work.category.includes(this.slug)
        )
      )
      return res
    }
  },
  methods: {
    getImageUrl(imageId) {
      return require(`~/assets/images/${imageId}`)
    },
    getImageUrlAUX(imageId) {
      return require(`~/assets/images/works/${imageId}`)
    }
  }
}
</script>
