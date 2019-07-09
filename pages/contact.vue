<i18n>
{
  "es": {
    "contact": "Contacto",
    "contact_form": "Formulario de contacto",
    "sending": "Enviando...",
    "name": "Nombre",
    "email": "E-mail",
    "phone": "Teléfono",
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
    "phone": "Phone",
    "message": "Message",
    "send": "Send",
    "social_networks": "Follow us",
    "where_are_title": "Where we are",
  }
}
</i18n>

<template>
  <div id="contact-page">
    <PageClaim :title="$t('contact')" background="" />
    <section class="mt-60">
      <div class="container">
        <div class="enreda-table">
          <dl class="first">Email</dl>
          <dd class="first">
            <a href="mailto:info@enreda.coop">info@enreda.coop</a>
          </dd>
          <dl>{{ $t('phone') }}</dl>
          <dd><a href="tel:+34693554518">+34 693 55 45 18</a></dd>
          <dl>Twitter</dl>
          <dd>
            <a href="https://twitter.com/enreda">@enreda</a>
          </dd>
          <dl>Facebook</dl>
          <dd>
            <a href="https://www.facebook.com/enreda.coop">@enreda.coop</a>
          </dd>
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
