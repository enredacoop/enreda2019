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
    <div class="row bg-light m-0">
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
        <div class="container">
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
      <section id="offices">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 text-center">
              <h2 class="section-heading">{{ offices.title }}</h2>
              <h3 class="section-subheading text-muted"></h3>
            </div>
          </div>
          <div class="row text-center justify-content-center">
            <div
              v-for="(place, index) in offices.places"
              :key="index"
              class="col-sm-3 col-xs-6"
            >
              <h3 class="city">{{ place.city }}</h3>
              <template v-if="place.othercontact != ''">
                <h5 class="officename">
                  <a :href="'mailto:' + place.othercontact" target="_blank">{{
                    place.othercontact
                  }}</a>
                </h5>
              </template>
              <template v-else>
                <h5 class="officename">
                  <a :href="place.officeurl" target="_blank">{{
                    place.officename
                  }}</a>
                </h5>
                <p v-if="place.address != ''" class="text-muted">
                  {{ place.address }}
                  <br />
                  {{ place.zipcode }}, {{ place.city }}
                </p>
              </template>
            </div>
          </div>
        </div>
      </section>

      <section id="network">
        <img src="/assets/images/cooperative/banner_network.png" />
        <div class="container">
          <div class="row">
            <div class="col-sm-12 text-center">
              <h2 class="section-heading">{{ network.title }}</h2>
              <h3 class="section-subheading text-muted">
                {{ network.subtitle }}
              </h3>
            </div>
          </div>
          <div class="row">
            <div
              v-for="(node, index) in network.nodes"
              :key="index"
              class="col-sm-12 col-md-4 col-lg-3"
            >
              <a :href="node.url" target="_blank">
                <div class="node">
                  <h3>{{ node.name }}</h3>
                  <p>{{ node.description }}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="partof">
        <div class="container">
          <div class="row justify-content-center">
            <div id="join" class="col-sm-12 col-md-4 col-lg-4 text-center">
              <h5>{{ join.title }}</h5>
              <p v-html="join.description"></p>
            </div>
            <div
              id="collaborate"
              class="col-sm-12 col-md-4 col-lg-4 text-center"
            >
              <h5>{{ collaborate.title }}</h5>
              <p v-html="collaborate.description"></p>
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
      },
      offices: {
        title: 'Dónde estamos',
        places: [
          {
            city: 'Sevilla',
            address: 'Avda. República Argentina 25 Planta 9',
            zipcode: '41011',
            officename: 'Espacio RES',
            officeurl: 'http://espaciores.org',
            othercontact: ''
          },
          {
            city: 'Malaga',
            address: 'Trinidad Grund 7, 1º derecha',
            zipcode: '29001',
            officename: 'malaga@enreda.coop',
            officeurl: '',
            othercontact: ''
          },
          {
            city: 'Madrid',
            address: '',
            zipcode: '',
            officename: '',
            officeurl: '',
            othercontact: 'madrid@enreda.coop'
          }
        ]
      },

      join: {
        title: 'Únete',
        description:
          "Si quieres trabajar con nosotras, y desarrollar tu empleabilidad haciendo lo que más te gusta, <a href='mailto:info@enreda.coop' target='_blank'>ponte en contacto con nosotras</a>.",
        contact: 'Escríbenos',
        url: 'mailto:info@enreda.coop'
      },

      collaborate: {
        title: 'Colabora',
        description:
          "Si quieres colaborar en proyectos de transformación social, puedes hacerlo a través de <a href='https://www.loomio.org/g/VcGPxekv/socialinn' target='_blank'> nuestro correo electrónico o redes sociales</a>, un espacio de creación colectiva enfocado a la innovación social.",
        contact: 'Deseo participar',
        url: ''
      },

      network: {
        title: 'Motivaciones de trabajar en red',
        subtitle:
          'Colaborar, cooperar y trabajar con otras organizaciones facilita el cumplimiento de nuestros objetivos y fines; así como intercambiar experiencias; aprender colectivamente; y apoyar otros proyectos con los que nos sentimos identificadas.',
        nodes: [
          {
            name: 'Fiare',
            logo: '',
            description:
              'Banca ética y cooperativa constituida como herramienta al servicio de la transformación social a través de la financiación de proyectos de la economía social y solidaria y la promoción de una cultura de la intermediación financiera, bajo los principios de la transparencia, la participación, la democracia y el crédito como derecho.',
            url: 'http://www.fiarebancaetica.coop'
          },
          {
            name: 'Coop57',
            logo: '',
            description:
              ' Cooperativa de servicios financieros éticos y solidarios que tiene como objetivo principal, contribuir a la transformación social en positivo de nuestra economía y de nuestra sociedad.',
            url: 'http://www.coop57.coop'
          },
          {
            name: 'REAS',
            logo: '',
            description:
              'Red de Redes de Economía Alternativa y Solidaria, compuesta por más de trescientas entidades que nos agrupamos en redes territoriales y sectoriales.',
            url: 'http://www.economiasolidaria.org'
          },
          {
            name: 'MS Sevilla',
            logo: '',
            description:
              'Red de producción, distribución y consumo de bienes y servicios con criterios éticos, democráticos, ecológicos y solidarios.El objetivo de esta red es cubrir una parte significativa de las necesidades de sus participantes y desconectar, tanto como sea posible, la economía solidaria de la economía capitalista.',
            url: 'http://mercadosocialsevilla.org'
          },
          {
            name: 'Andalibre',
            logo: '',
            description:
              'Empresas de Software Libre de Andalucía. Agrupación de proveedores de soluciones informáticas basadas en las tecnologías disruptivas del software libre y los estándares abiertos.',
            url: 'http://www.andalibre.org'
          },
          {
            name: 'Openkratio',
            logo: '',
            description:
              'Asociación en pro de la transparencia de las administraciones públcas y la participación de la ciudadanía en el trabajo de las mismas.',
            url: 'http://openkratio.org'
          },
          {
            name: 'Faecta',
            logo: '',
            description:
              'Federación Andaluza de Empresas Cooperativas de Trabajo Asociado.',
            url: 'http://www.faecta.coop'
          },
          {
            name: 'Som Connexió',
            logo: '',
            description:
              'Cooperativa de consumo de productos de telecomunicaciones',
            url: 'https://eticom.coop/es/'
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
