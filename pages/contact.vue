<i18n>
{
  "es": {
    "contact": "Formulario de contacto",
    "sending": "Enviando...",
    "name": "Nombre",
    "email": "E-mail",
    "message": "Mensaje",
    "send": "Enviar"
  },
  "en": {
    "contact": "Contact form",
    "sending": "Sending...",
    "name": "Name",
    "email": "E-mail",
    "message": "Message",
    "send": "Send"
  }
}
</i18n>

<template>
  <section>
    <div id="contact-form" class="contact-form">
      <h1 class="contact-form_title">{{ $t('contact') }}</h1>
      <div class="separator"></div>

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
</template>

<script>
/* eslint-disable no-console */

export default {
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
