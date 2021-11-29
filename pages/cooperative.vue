<i18n>
{
  "es": {
    "title": "Cooperativa",
    "slogan": "En ENREDA tenemos una mirada distinta de la realidad, de la tecnología y de la comunicación; y eso suele ser el primer paso para poder transformar las cosas.",
    "beginnings_title": "Nuestros principios",
    "beginnings_subtitle": "...y si no te gustan, son los únicos que orgullosamente tenemos.",
    "beginnings_1_title": "Cooperativismo",
    "beginnings_1_description": "Creemos en el valor social y democrático de las empresas. Mejor cooperar que competir.",
    "beginnings_2_title": "Libertad tecnológica",
    "beginnings_2_description": "Apostamos por el Software Libre y la libertad tecnológica en todos los ámbitos.",
    "beginnings_3_title": "Compromiso social",
    "beginnings_3_description": "Todas y todos podemos y debemos ser parte del cambio social para mejorar el mundo en el que vivimos. Desde lo local hacia lo global.",
    "team_title": "Equipo",
    "team_subtitle": "Las personas como centro de toda actividad empresarial.",
    "partner": "Socio",
    "trabajador": "Trabajador",
    "trabajadora": "Trabajadora",
    "becario": "Becario",
    "colaborador": "Colaborador",
    "colaboradora": "Colaboradora",
    "where_are_title": "Dónde estamos",
    "motivations_title": "Motivaciones de trabajar en red",
    "motivations_subtitle": "Colaborar, cooperar y trabajar con otras organizaciones facilita el cumplimiento de nuestros objetivos y fines; así como intercambiar experiencias; aprender colectivamente; y apoyar otros proyectos con los que nos sentimos identificadas.",
    "motivations_fiare":"Banca ética y cooperativa constituida como herramienta al servicio de la transformación social a través de la financiación de proyectos de la economía social y solidaria y la promoción de una cultura de la intermediación financiera, bajo los principios de la transparencia, la participación, la democracia y el crédito como derecho.",
    "motivations_coop57": "Cooperativa de servicios financieros éticos y solidarios que tiene como objetivo principal, contribuir a la transformación social en positivo de nuestra economía y de nuestra sociedad.",
    "motivations_reas": "Red de Redes de Economía Alternativa y Solidaria, compuesta por más de trescientas entidades que nos agrupamos en redes territoriales y sectoriales.",
    "motivations_mssevilla": "Red de producción, distribución y consumo de bienes y servicios con criterios éticos, democráticos, ecológicos y solidarios. El objetivo de esta red es cubrir una parte significativa de las necesidades de sus participantes y desconectar, tanto como sea posible, la economía solidaria de la economía capitalista.",
    "motivations_andalibre": "Empresas de Software Libre de Andalucía. Agrupación de proveedores de soluciones informáticas basadas en las tecnologías disruptivas del software libre y los estándares abiertos.",
    "motivations_openkratio": "Asociación en pro de la transparencia de las administraciones públicas y la participación de la ciudadanía en el trabajo de las mismas.",
    "motivations_faecta": "Federación Andaluza de Empresas Cooperativas de Trabajo Asociado.",
    "motivations_somconnexio": "Cooperativa de consumo de productos de telecomunicaciones.",
    "join_up_title": "Únete",
    "join_up_description": "Si quieres trabajar con nosotras, y desarrollar tu empleabilidad haciendo lo que más te gusta, <a href='mailto:info@enreda.coop' target='_blank'>ponte en contacto con nosotras</a>.",
    "collaborate_title": "Colabora",
    "collaborate_description": "Si quieres colaborar en proyectos de transformación social, puedes hacerlo a través de <b>nuestro correo electrónico o redes sociales</b>, un espacio de creación colectiva enfocado a la innovación social.",
  },
  "en": {
    "title": "Cooperative",
    "slogan": "In ENREDA we have a different view of reality, of technology and communication; and that is usually the first step to be able to transform things.",
    "beginnings_title": "Our Principles",
    "beginnings_subtitle": "... and if you do not like them, they are the only ones we proudly have.",
    "beginnings_1_title": "Cooperativism",
    "beginnings_1_description": "We believe in the social and democratic value of companies. Better to cooperate than to compete.",
    "beginnings_2_title": "Technological freedom",
    "beginnings_2_description": "We bet on Free Software and technological freedom in all areas.",
    "beginnings_3_title": "Social commitment",
    "beginnings_3_description": "All of us can and must be part of the social change to improve the world in which we live. From the local to the global.",
    "team_title": "Team",
    "team_subtitle": "People as the center of all business activity.",
    "partner": "Partner",
    "trabajador": "Employee",
    "trabajadora": "Employee",
    "becario": "Scholar",
    "colaborador": "Collaborator",
    "colaboradora": "Collaborator",
    "where_are_title": "Where we are",
    "motivations_title": "Motivations of working in a network",
    "motivations_subtitle": "Collaborating, cooperating and working with other organizations facilitates the fulfillment of our objectives and goals; as well as exchange experiences; learn collectively; and support other projects with which we feel identified.",
    "motivations_fiare":"Ethical and cooperative banking constituted as a tool at the service of social transformation through the financing of projects of the social and solidarity economy and the promotion of a culture of financial intermediation, under the principles of transparency, participation, democracy and Credit as a right.",
    "motivations_coop57": "Cooperative of ethical and solidarity financial services whose main objective is to contribute to the positive social transformation of our economy and our society.",
    "motivations_reas": "Network of Alternative and Solidarity Economy Networks, composed of more than three hundred entities grouped into territorial and sectorial networks.",
    "motivations_mssevilla": "Network of production, distribution and consumption of goods and services with ethical, democratic, ecological and solidarity criteria. The objective of this network is to cover a significant part of the needs of its participants and disconnect, as much as possible, the solidarity economy of the capitalist economy.",
    "motivations_andalibre": "Free Software Companies of Andalusia. Grouping of IT solution providers based on disruptive technologies of free software and open standards.",
    "motivations_openkratio": "Association for the transparency of public administrations and the participation of citizens in their work.",
    "motivations_faecta": "Andalusian Federation of Cooperatives of Associated Work.",
    "motivations_somconnexio": "Telecomunications Products Consumer Cooperative.",
    "join_up_title": "Join up",
    "join_up_description": "If you want to work with us, and develop your employability by doing what you like most, <a href='mailto:info@enreda.coop' target='_blank'>get in touch with us</a>.",
    "collaborate_title": "Collaborate",
    "collaborate_description": "If you want to collaborate in social transformation projects, you can do it through <b>our email or social networks</b>, a collective creation space focused on social innovation.",
  }
}
</i18n>

<template>
  <div class="cooperative">
    <PageClaim :title="$t('title')" background="bg_1" />
    <div class="row bg-light m-0">
      <div class="container">
        <div class="col-md-12 text-center">
          <h2 class="slogan">{{ $t('slogan') }}</h2>
        </div>
      </div>
    </div>

    <div id="cooperative" class="wrapper">
      <section id="principles">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 text-center">
              <h2 class="section-heading">{{ $t('beginnings_title') }}</h2>
              <h3 class="section-subheading text-muted">
                {{ $t('beginnings_subtitle') }}
              </h3>
            </div>
          </div>
          <div class="row text-center">
            <div
              v-for="(item, index) in principles.items"
              :key="index"
              class="col-sm-12 col-md-4"
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
              <h3 class="principle-heading">{{ $t(item.title) }}</h3>
              <p class="text-muted">{{ $t(item.description) }}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="team">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 text-center">
              <h2 class="section-heading">{{ $t('team_title') }}</h2>
              <h3 class="section-subheading text-muted">
                {{ $t('team_subtitle') }}
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
                  <span
                    v-if="people.role != ''"
                    class="label label-custom-primary"
                    >{{ $t(people.role) }}</span
                  >
                </p>
                <ul class="list-inline social-buttons">
                  <li :v-if="people.web != 'null'">
                    <a
                      :href="people.web"
                      target="_blank"
                      rel="noopener noreferrer"
                      :title="'web de ' + people.name"
                    >
                      <i class="fa fa-external-link-square"></i>
                    </a>
                  </li>
                  <li :v-if="people.email != null">
                    <a
                      :href="'mailto:' + people.email"
                      target="_blank"
                      rel="noopener noreferrer"
                      :title="people.email"
                    >
                      <i class="fa fa-envelope"></i>
                    </a>
                  </li>
                  <li :v-if="people.twitter != null">
                    <a
                      :href="'https://twitter.com/' + people.twitter"
                      target="_blank"
                      rel="noopener noreferrer"
                      :title="'Twitter de' + people.name"
                    >
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li :v-if="people.linkedin != null">
                    <a
                      :href="people.linkedin"
                      target="_blank"
                      rel="noopener noreferrer"
                      :title="'Linkedin de ' + people.name"
                    >
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li :v-if="people.github != null">
                    <a
                      :href="'https://github.com/' + people.github"
                      target="_blank"
                      rel="noopener noreferrer"
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
      <Offices />
      <section id="network">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 text-center">
              <h2 class="section-heading">{{ $t('motivations_title') }}</h2>
              <h3 class="section-subheading text-muted">
                {{ $t('motivations_subtitle') }}
              </h3>
            </div>
          </div>
          <div class="row">
            <div
              v-for="(node, index) in network.nodes"
              :key="index"
              class="col-sm-12 col-md-4 col-lg-3"
            >
              <a :href="node.url" target="_blank" rel="noopener noreferrer">
                <div class="node">
                  <h3>{{ node.name }}</h3>
                  <p>{{ $t(node.description) }}</p>
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
              <h5>{{ $t('join_up_title') }}</h5>
              <p v-html="$t('join_up_description')"></p>
            </div>
            <div
              id="collaborate"
              class="col-sm-12 col-md-4 col-lg-4 text-center"
            >
              <h5>{{ $t('collaborate_title') }}</h5>
              <p v-html="$t('collaborate_description')"></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import PageClaim from '~/components/layout/PageClaim.vue'
import Offices from '~/components/layout/Offices.vue'

export default {
  components: {
    PageClaim,
    Offices
  },
  data() {
    return {
      principles: {
        items: [
          {
            title: 'beginnings_1_title',
            description: 'beginnings_1_description',
            icon_prefix: 'fas',
            icon: 'puzzle-piece'
          },
          {
            title: 'beginnings_2_title',
            description: 'beginnings_2_description',
            icon_prefix: 'fas',
            icon: 'unlock'
          },
          {
            title: 'beginnings_3_title',
            description: 'beginnings_3_description',
            icon_prefix: 'fas',
            icon: 'undo'
          }
        ]
      },
      team: {
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
            role: ''
          },
          /*
          {
            name: 'José Rubén Garrido',
            position: ' ',
            photo: 'joserubengar.jpeg',
            email: 'joser.garrido@enreda.coop',
            web: 'http://joserubengr.com',
            twitter: 'joserubengar',
            linkedin: '',
            github: '',
            role: ''
          }, */
          {
            name: 'David Aurusa',
            position: ' ',
            photo: 'aurusa.jpg',
            email: 'david.aurusa@enreda.coop',
            web: 'http://hazlotransparente.es/',
            twitter: 'aurusa',
            linkedin: '',
            github: '',
            role: ''
          },
          /*
          {
            name: 'Lucía Cano',
            position: ' ',
            photo: 'luciacano.png',
            email: 'lucia.cano@enreda.coop',
            web: '',
            twitter: '',
            linkedin: '',
            github: '',
            role: ''
          },
          */
          {
            name: 'Arantza Lozano',
            position: ' ',
            photo: 'arantza.jpg',
            email: 'arantza.lozano@enreda.coop',
            web: '',
            twitter: '',
            linkedin: '',
            github: '',
            role: ''
          },
          {
            name: 'José Manuel Palacios López',
            position: ' ',
            photo: 'jose.jpg',
            email: 'jmanuel.palacios@enreda.coop',
            web: '',
            twitter: '',
            linkedin: '',
            github: '',
            role: ''
          },
          {
            name: 'Elvira Ramírez',
            position: ' ',
            photo: 'elvira.jpg',
            email: 'elvira.ramirez@enreda.coop',
            web: '',
            twitter: '',
            linkedin: '',
            github: '',
            role: ''
          },
          {
            name: 'Samuel Molina',
            position: ' ',
            photo: 'samuel.jpg',
            email: 'samuel.molina@enreda.coop',
            web: '',
            twitter: '',
            linkedin: '',
            github: '',
            role: ''
          },
          /*
          {
            name: 'María Ozámiz',
            position: ' ',
            photo: 'maria.jpg',
            email: 'maria.ozamiz@enreda.coop',
            web: '',
            twitter: '',
            linkedin: '',
            github: '',
            role: ''
          },
          */
          {
            name: 'Diego Calvo Castillo',
            position: ' ',
            photo: 'diego.jpg',
            email: 'diego.calvo@enreda.coop',
            web: '',
            twitter: '',
            linkedin: '',
            github: '',
            role: ''
          },
          {
            name: 'Cynthia Gorosito',
            position: ' ',
            photo: 'cynthia.jpg',
            email: 'c.elizabeth.gorosito@enreda.coop',
            web: '',
            twitter: '',
            linkedin: '',
            github: '',
            role: ''
          }
          /*
          {
            name: 'Carlos Campos',
            position: ' ',
            photo: 'carloscampos.jpg',
            email: 'carlos.campos@enreda.coop',
            web: 'https://www.instagram.com/carcamcue/',
            twitter: '',
            linkedin: 'https://www.linkedin.com/in/carcamcue/',
            github: 'carcamcue',
            role: ''
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
            role: ''
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
            role: ''
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
            role: 'colaborador'
          }
          */
        ]
      },
      network: {
        nodes: [
          {
            name: 'Fiare',
            logo: '',
            description: 'motivations_fiare',
            url: 'http://www.fiarebancaetica.coop'
          },
          {
            name: 'Coop57',
            logo: '',
            description: 'motivations_coop57',
            url: 'http://www.coop57.coop'
          },
          {
            name: 'REAS',
            logo: '',
            description: 'motivations_reas',
            url: 'http://www.economiasolidaria.org'
          },
          {
            name: 'MS Sevilla',
            logo: '',
            description: 'motivations_mssevilla',
            url: 'http://mercadosocialsevilla.org'
          },
          {
            name: 'Andalibre',
            logo: '',
            description: 'motivations_andalibre',
            url: 'http://www.andalibre.org'
          },
          {
            name: 'Openkratio',
            logo: '',
            description: 'motivations_openkratio',
            url: 'http://openkratio.org'
          },
          {
            name: 'Faecta',
            logo: '',
            description: 'motivations_faecta',
            url: 'http://www.faecta.coop'
          },
          {
            name: 'Som Connexió',
            logo: '',
            description: 'motivations_somconnexio',
            url: 'https://eticom.coop/es/'
          }
        ]
      }
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
      es: '/cooperativa',
      en: '/cooperative'
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
