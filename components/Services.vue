<template>
  <div class="container ptb-120">
    <b-card-group deck>
      <b-card
        title="Participación Digital"
        :img-src="require('~/assets/images/services/participacion_digital.jpg')"
        img-alt="Image"
        img-top
      >
        <nuxt-link
          class="btn btn-hidden stretched-link"
          :to="
            localePath({
              name: 'services-slug',
              params: { slug: 'participaciondigital' }
            })
          "
        ></nuxt-link>
      </b-card>

      <b-card
        title="Participación Ciudadana"
        :img-src="
          require('~/assets/images/services/participacion_ciudadana.jpg')
        "
        img-alt="Image"
        img-top
      >
        <nuxt-link
          class="btn btn-hidden stretched-link"
          :to="
            localePath({
              name: 'services-slug',
              params: { slug: 'participacionciudadana' }
            })
          "
        ></nuxt-link>
      </b-card>

      <b-card
        title="Diseño y desarrollo de productos"
        :img-src="require('~/assets/images/services/diseno_desarrollo.jpg')"
        img-alt="Image"
        img-top
      >
        <nuxt-link
          class="btn btn-hidden stretched-link"
          :to="
            localePath({
              name: 'services-slug',
              params: { slug: 'disenodesarrolloproducto' }
            })
          "
        ></nuxt-link>
      </b-card>

      <b-card
        title="Analítica - Big data"
        :img-src="require('~/assets/images/services/big_data.jpg')"
        img-alt="Image"
        img-top
      >
        <nuxt-link
          class="btn btn-hidden stretched-link"
          :to="
            localePath({
              name: 'services-slug',
              params: { slug: 'analitica-bigdata' }
            })
          "
        ></nuxt-link>
      </b-card>

      <b-card
        title="Transparencia"
        :img-src="require('~/assets/images/services/transparencia.jpg')"
        img-alt="Image"
        img-top
      >
        <nuxt-link
          class="btn btn-hidden stretched-link"
          :to="
            localePath({
              name: 'services-slug',
              params: { slug: 'transparencia' }
            })
          "
        ></nuxt-link>
      </b-card>

      <b-card
        title="edusi"
        :img-src="require('~/assets/images/services/edusi.png')"
        img-alt="Image"
        img-top
        class="img-contain"
      >
        <a
          href="http://edusi.eu/"
          target="_blank"
          class="btn btn-hidden stretched-link"
        ></a>
      </b-card>

      <b-card
        title="LynxAnalytica"
        :img-src="require('~/assets/images/services/lynx_analytica.png')"
        img-alt="Image"
        img-top
        class="img-contain"
      >
        <a
          href="http://lynxanalytica.com/"
          target="_blank"
          class="btn btn-hidden stretched-link"
        ></a>
      </b-card>

      <b-card
        title="Contáctanos"
        :img-src="require('~/assets/images/services/contactanos.jpg')"
        img-alt="Image"
        img-top
      >
        <nuxt-link
          :to="localePath('contact')"
          class="btn btn-hidden stretched-link"
        ></nuxt-link>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {}
</script>
