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
    <section class="mb-60">
      <div class="container">
        <h2 class="section-heading">{{ $t('social_networks') }}</h2>
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
    <Offices />
  </div>
</template>

<script>
/* eslint-disable no-console */
import PageClaim from '~/components/layout/PageClaim.vue'
import Offices from '~/components/layout/Offices.vue'

export default {
  components: {
    PageClaim,
    Offices
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
      isSending: false
    }
  },
  computed: {
    meta() {
      return this.$store.state.meta.contact
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
