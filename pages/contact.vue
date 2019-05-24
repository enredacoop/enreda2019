<i18n>
{
  "es": {
    "contact": "Contacto",
    "contact_form": "Formulario de contacto",
    "sending": "Enviando...",
    "name": "Nombre",
    "email": "E-mail",
    "message": "Mensaje",
    "send": "Enviar",
    "social_networks": "Síguenos",
    "where_are_title": "Dónde estamos",
  },
  "en": {
    "contact": "Contact",
    "contact_form": "Contact form",
    "sending": "Sending...",
    "name": "Name",
    "email": "E-mail",
    "message": "Message",
    "send": "Send",
    "social_networks": "Follow us",
    "where_are_title": "Where we are",
  }
}
</i18n>

<template>
  <div>
    <PageClaim :title="$t('contact')" background="" />
    <section>
      <div id="contact-form" class="contact-form">
        <h1 class="section-heading text-center">{{ $t('social_networks') }}</h1>
        <div class="networks text-center mt-30">
          <a class="sn" href="http://twitter.com/enreda" target="_blank">
            <font-awesome-layers class="fa-3x">
              <font-awesome-icon icon="circle" class="primary" />
              <font-awesome-icon
                :icon="['fab', 'twitter']"
                transform="shrink-6"
                class="white"
              />
            </font-awesome-layers>
          </a>
          <a
            class="sn"
            href="https://www.facebook.com/enreda.coop"
            target="_blank"
          >
            <font-awesome-layers class="fa-3x">
              <font-awesome-icon icon="circle" class="primary" />
              <font-awesome-icon
                :icon="['fab', 'facebook-f']"
                transform="shrink-6"
                class="white"
              />
            </font-awesome-layers>
          </a>
        </div>
      </div>
    </section>
    <section>
      <div id="contact-form" class="contact-form">
        <h1 class="section-heading text-center">{{ $t('contact_form') }}</h1>

        <div v-if="isSending" class="loading">{{ $t('sending') }}</div>

        <form class="form" @submit="onSubmit">
          <input
            v-model="contact.name"
            required
            name="name"
            :placeholder="$t('name')"
            type="text"
            autocomplete="off"
          />
          <input
            v-model="contact.email"
            required
            name="email"
            :placeholder="$t('email')"
            type="email"
            autocomplete="off"
          />
          <textarea
            v-model="contact.message"
            name="message"
            rows="4"
            :placeholder="$t('message')"
          ></textarea>
          <button class="button">{{ $t('send') }}</button>
        </form>
      </div>
    </section>
    <section id="offices" class="mt-60">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center">
            <h2 class="section-heading">{{ $t('where_are_title') }}</h2>
            <h3 class="section-subheading text-muted"></h3>
          </div>
        </div>
        <div class="row text-center justify-content-center mt-30">
          <div
            v-for="(place, index) in offices.places"
            :key="index"
            class="col-sm-12 col-md-3 col-lg-3"
          >
            <h3 class="city">{{ place.city }}</h3>
            <template v-if="place.othercontact != ''">
              <h5 class="officename">
                <a :href="'mailto:' + place.othercontact" target="_blank">{{
                  place.othercontact
                }}</a>
              </h5>
            </template>
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
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
/* eslint-disable no-console */
import PageClaim from '~/components/layout/PageClaim.vue'

export default {
  components: {
    PageClaim
  },
  nuxtI18n: {
    paths: {
      es: '/contacto',
      en: '/contact'
    }
  },
  data() {
    return {
      contact: {
        name: '',
        email: '',
        message: ''
      },
      offices: {
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
            officename: '',
            officeurl: '',
            othercontact: 'malaga@enreda.coop'
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

      isSending: false
    }
  },

  methods: {
    /**
     * Clear the form
     */

    clearForm() {
      for (const field in this.contact) {
        this.contact[field] = ''
      }
    },

    /**
     * Handler for submit
     */

    onSubmit(evt) {
      evt.preventDefault()

      this.isSending = true

      setTimeout(() => {
        // Build for data
        const form = new FormData()
        for (const field in this.contact) {
          form.append(field, this.contact[field])
        }

        // Send form to server
        this.$http
          .post('/app.php', form)
          .then(response => {
            console.log(response)
            this.clearForm()
            this.isSending = false
          })
          .catch(e => {
            console.log(e)
          })
      }, 1000)
    }
  }
}
</script>
