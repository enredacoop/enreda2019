<i18n>
{
  "es": {
    "title": "UrbanData",
    "slogan": "Plataforma para el seguimiento de los planes  estratégicos e indicadores de la Agenda Urbana y Agenda 2030 en la ciudad.",
    "texts": {
      "0": {
        "title": "Observatorio de indicadores",
        "description": "Permite realizar un seguimiento de los indicadores definidos para medir el avance de los planes elaborados en relación a la Agenda Urbana y la Agenda 2030."
      },
      "1": {
        "title": "Seguimiento de planes",
        "description": "Podrás consultar todos los planes junto con sus indicadores de seguimiento y datos relacionados, para facilitar el seguimiento y la transparencia en su ejecución."
      },
      "2": {
        "title": "Información accesible",
        "description": "El panel de seguimiento facilita al usuario acceder a la información de una manera sencilla y fácilmente interpretable. Esta accesibilidad permite que el portal lo pueda consultar cualquier persona y entender su contenido sin mucha dificultad."
      },
      "3": {
        "title": "Transparencia y participación",
        "description": "Esta herramienta es clave para que la ciudadanía pueda acceder a la información sobre los planes estratégicos y pueda participar en los procesos de desarrollo urbano sostenible."
      },
      "4": {
        "title": "Open Data",
        "description": "Todos los datos de la plataforma están accesibles y en formatos abiertos para poder realizar análisis y seguimiento de toda la ejecución de los planes estratégicos de la ciudad."
      }
    }
  },
  "en": {
    "title": "UrbanData",
    "slogan": "Platform for monitoring the strategic plans and indicators of the Urban Agenda and Agenda 2030 in the city.",
    "texts": {
      "0": {
        "title": "Indicator Observatory",
        "description": "Allows monitoring of the indicators defined to measure the progress of the plans developed in relation to the Urban Agenda and the 2030 Agenda."
      },
      "1": {
        "title": "Plan monitoring",
        "description": "You will be able to consult all plans along with their monitoring indicators and related data, to facilitate monitoring and transparency in their implementation."
      },
      "2": {
        "title": "Accessible information",
        "description": "The monitoring dashboard facilitates the user to access information in a simple and easily interpretable way. This accessibility allows the portal to be consulted by anyone and to understand its content without much difficulty."
      },
      "3": {
        "title": "Transparency and participation",
        "description": "This tool is key for citizens to access information on strategic plans and to participate in sustainable urban development processes."
      },
      "4": {
        "title": "Open Data",
        "description": "All data on the platform are accessible and in open formats to be able to perform analysis and monitoring of the entire implementation of the city's strategic plans."
      }
    }
  }
}
</i18n>

<template>
  <div class="cooperative">
    <PageClaim :title="$t('title')" background="urbandata" />
    <div class="row bg-light m-0">
      <div class="container">
        <div class="col-md-12 text-center">
          <h2 class="slogan">{{ $t('slogan') }}</h2>
        </div>
      </div>
    </div>
    <template>
      <section class="header-with-logos">
        <div class="header-with-logos__title">
          <h2>Observatorio Urbano</h2>
        </div>
        <div class="header-with-logos__logos">
          <a href="https://www.aue.gob.es/">
            <img
              src="~/assets/images/logoAUE.png"
              width="150"
              alt="agenda-urbana-española"
            />
          </a>
          <a href="https://www.un.org/sustainabledevelopment/es/">
            <img
              src="~/assets/images/logoA2030.png"
              width="150"
              alt="agenda-2030"
            />
          </a>
        </div>
      </section>
    </template>
    <template>
      <section id="texts">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-sm-12 col-md-12 col-lg-12">
              <div
                v-for="(i, index) in [1, 2, 3, 4, 5]"
                :key="index"
                class="block-text"
              >
                <h2 class="section-heading">
                  {{ $t(`texts.${index}.title`) }}
                </h2>
                <p class="section-body">
                  {{ $t(`texts.${index}.description`) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>
  </div>
</template>

<script>
import PageClaim from '~/components/layout/PageClaim.vue'

export default {
  components: {
    PageClaim
  },
  data() {
    return {
      texts: []
    }
  },
  computed: {
    meta() {
      return this.$store.state.meta.cooperativa
    }
  },
  methods: {
    getImgUrl(pic) {
      return require('../assets/images/cooperative/people/' + pic)
    }
  },
  nuxtI18n: {
    paths: {
      es: '/urbandata',
      en: '/urbandata'
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

<style lang="less" scoped>
#texts {
  .block-text:first-child {
    margin-top: 0px;
  }
  .block-text {
    margin-top: 50px;
    margin-bottom: 80px;
  }
  .section-heading {
    margin-bottom: 30px;
  }
  .section-body {
    font-size: 20px;
    max-width: 1000px;
    margin: 0 auto;
    margin-right: 40px;
    text-align: justify;
  }
}
.header-with-logos {
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &__title {
    margin: 30px auto;
  }
  &__logos {
    margin: auto;
    img {
      margin: auto 30px;
    }
  }
}
</style>
