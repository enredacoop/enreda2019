<i18n>
{
  "es": {
    "cooperative": "Cooperativa",
  },
  "en": {
    "cooperative": "Cooperative",
  }
}
</i18n>

<template>
  <div class="cooperative">
    <PageClaim :title="$t('cooperative')" />
    <div class="row bg-light">
      <div class="container">
        <div class="col-md-12 text-center">
          <h2 class="slogan">{{ intro }}</h2>
        </div>
      </div>
    </div>

    <div id="cooperative" class="wrapper">
      <section id="principles">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 text-center">
              <h2 class="section-heading">{{ principles.title }}</h2>
              <h3 class="section-subheading text-muted">
                {{ principles.subtitle }}
              </h3>
            </div>
          </div>
          <div class="row text-center">
            <div
              v-for="(item, index) in principles.items"
              :key="index"
              class="col-sm-4"
              :v-if="principles.items != null"
            >
              <font-awesome-layers class="fa-6x">
                <font-awesome-icon icon="circle" class="primary" />
                <font-awesome-icon
                  :icon="[item.icon_prefix, item.icon]"
                  transform="shrink-6"
                  class="white"
                />
              </font-awesome-layers>
              <h3 class="principle-heading">{{ item.title }}</h3>
              <p class="text-muted">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="team">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-12 text-center">
              <h2 class="section-heading">{{ team.title }}</h2>
              <h3 class="section-subheading text-muted">
                {{ team.subtitle }}
              </h3>
            </div>
          </div>
          <div class="row">
            <div
              v-for="(people, index) in team.people"
              :key="index"
              class="col-lg-3 col-sm-4 col-xs-12"
              :v-if="team.people != null"
            >
              <div class="team-member">
                <img
                  :src="getImgUrl(people.photo)"
                  class="img-responsive img-circle"
                  :alt="'Foto de ' + people.name"
                  width="200"
                  height="200"
                />
                <h4>{{ people.name }}</h4>
                <p class="text-muted">{{ people.position }}</p>
                <p>
                  <span class="label label-custom-primary">{{
                    people.role
                  }}</span>
                </p>
                <ul class="list-inline social-buttons">
                  <li :v-if="people.web != null">
                    <a
                      :href="people.web"
                      target="_blank"
                      :title="'web de ' + people.name"
                    >
                      <i class="fa fa-external-link-square"></i>
                    </a>
                  </li>
                  <li :v-if="people.email != null">
                    <a
                      :href="'mailto:' + people.email"
                      target="_blank"
                      :title="people.email"
                    >
                      <i class="fa fa-envelope"></i>
                    </a>
                  </li>
                  <li :v-if="people.twitter != null">
                    <a
                      :href="'https://twitter.com/' + people.twitter"
                      target="_blank"
                      :title="'Twitter de' + people.name"
                    >
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li :v-if="people.linkedin != null">
                    <a
                      :href="people.linkedin"
                      target="_blank"
                      :title="'Linkedin de ' + people.name"
                    >
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li :v-if="people.github != null">
                    <a
                      :href="'https://github.com/' + people.github"
                      target="_blank"
                      :title="'Github de ' + people.name"
                    >
                      <i class="fa fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-8 col-sm-offset-2 text-center">
              <p class="large text-muted"></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import PageClaim from '~/components/PageClaim.vue'

export default {
  components: {
    PageClaim
  },
  data() {
    return {
      logo: '300x300fondogriscompleto.png',
      claim: 'Tecnología para la Transformación Social',
      intro:
        'En ENREDA tenemos una mirada distinta de la realidad, de la tecnología y de la comunicación; y eso suele ser el primer paso para poder transformar las cosas.',
      principles: {
        title: 'Nuestros principios',
        subtitle:
          '...y si no te gustan, son los únicos que orgullosamente tenemos.',
        items: [
          {
            title: 'Cooperativismo',
            description:
              'Creemos en el valor social y democrático de las empresas. Mejor cooperar que competir.',
            icon_prefix: 'fas',
            icon: 'puzzle-piece'
          },
          {
            title: 'Libertad tecnológica',
            description:
              'Apostamos por el Software Libre y la libertad tecnológica en todos los ámbitos.',
            icon_prefix: 'fas',
            icon: 'unlock'
          },
          {
            title: 'Compromiso social',
            description:
              'Todas y todos podemos y debemos ser parte del cambio social para mejorar el mundo en el que vivimos. Desde lo local hacia lo global.',
            icon_prefix: 'fas',
            icon: 'undo'
          }
        ]
      },
      team: {
        title: 'Equipo',
        subtitle: 'Las personas como centro de toda actividad empresarial.',
        people: [
          {
            name: 'Pablo García',
            position: ' ',
            photo: 'pablogg.jpg',
            email: 'pablo.garcia@enreda.coop',
            web: 'http://pablogg.com',
            twitter: 'pablov2',
            linkedin: '',
            github: 'pablovg2',
            role: 'Socio'
          },
          {
            name: 'José Rubén Garrido',
            position: ' ',
            photo: 'joserubengar.jpeg',
            email: 'joser.garrido@enreda.coop',
            web: 'http://joserubengr.com',
            twitter: 'joserubengar',
            linkedin: '',
            github: '',
            role: 'Socio'
          },
          {
            name: 'David Aurusa',
            position: ' ',
            photo: 'aurusa.jpg',
            email: 'david.aurusa@enreda.coop',
            web: 'http://hazlotransparente.es/',
            twitter: 'aurusa',
            linkedin: '',
            github: '',
            role: 'Socio'
          },
          {
            name: 'Lucía Cano',
            position: ' ',
            photo: 'luciacano.png',
            email: 'lucia.cano@enreda.coop',
            web: '',
            twitter: '',
            linkedin: '',
            github: '',
            role: 'Trabajadora'
          },
          {
            name: 'Arantza Lozano',
            position: ' ',
            photo: 'arantza.jpg',
            email: 'arantza.lozano@enreda.coop',
            web: '',
            twitter: '',
            linkedin: '',
            github: '',
            role: 'Trabajadora'
          },
          {
            name: 'Alejandro Rodríguez',
            position: ' ',
            photo: 'alerodrom.jpg',
            email: 'alejandro.rodriguez@enreda.coop',
            web: '',
            twitter: '',
            linkedin: 'https://www.linkedin.com/in/alerodrom/',
            github: 'alerodrom',
            role: 'Trabajador'
          },
          {
            name: 'Carlos Campos',
            position: ' ',
            photo: 'carloscampos.jpg',
            email: 'carlos.campos@enreda.coop',
            web: 'https://www.instagram.com/carcamcue/',
            twitter: '',
            linkedin: 'https://www.linkedin.com/in/carcamcue/',
            github: 'carcamcue',
            role: 'Trabajador'
          },
          {
            name: 'Manuel Barbadillo',
            position: ' ',
            photo: 'manbarser.jpg',
            email: 'manuel.barbadillo@enreda.coop',
            web: '',
            twitter: '',
            linkedin: '',
            github: '',
            role: 'Becario'
          },
          {
            name: 'Azahara Martín',
            position: ' ',
            photo: 'aza.jpg',
            email: 'azahara.martin@enreda.coop',
            web: 'http://hazloparticipativo.es/',
            twitter: '4everAza',
            linkedin: '',
            github: '',
            role: 'Trabajadora'
          },
          {
            name: 'Patricia García',
            position: ' ',
            photo: 'patriciagarciaespin.jpg',
            email: '',
            web: 'http://csic.academia.edu/PatriciaGarciaEsp%C3%ADn',
            twitter: '',
            linkedin: '',
            github: '',
            role: 'Colaboradora'
          },
          {
            name: 'Soledad Maldonado',
            position: ' ',
            photo: 'sole.jpg',
            email: 'soledad.maldonado@enreda.coop',
            web: 'http://hazloparticipativo.es/',
            twitter: 'solemalpe',
            linkedin: '',
            github: '',
            role: 'Colaboradora'
          },
          {
            name: 'Quique Ruíz',
            position: ' ',
            photo: 'user_placeholder.png',
            email: 'quique@enreda.coop',
            web: 'http://www.systerminal.com',
            twitter: 'quiqueruizna',
            linkedin: '',
            github: 'joseenrique',
            role: 'Colaborador'
          },
          {
            name: 'Javier Moreno',
            position: ' ',
            photo: 'user_placeholder.png',
            email: 'javier@enreda.coop',
            web: '',
            twitter: 'javimoga',
            linkedin: '',
            github: '',
            role: 'Colaborador'
          }
        ]
      }
    }
  },
  methods: {
    getImgUrl(pic) {
      return require('../assets/images/cooperative/people/' + pic)
    }
  },
  nuxtI18n: {
    paths: {
      es: '/cooperativa',
      en: '/cooperative'
    }
  }
}
</script>
