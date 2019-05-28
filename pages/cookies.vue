<i18n>
{
  "es": {
    "title": "Política de cookies",
    "ask1": "¿Qué es una cookie?",
    "answer1": "Una cookie es una pequeña pieza de texto enviada a tu navegador por una web que has visitado. Ayuda a la web a recordar información sobre tu visita, como tu idioma preferente y otros ajutes. Esto puede hacer tu próxima visita más sencila y el sitio más útil para ti. Las cookies jugan un rol importante. Sin ellas, usar la web sería una experiencia mucho más frustante.",
    "ask2": "Google Analytics cookies",
    "answer2": "Este sitio usa Google Analytics para entender mejor cómo usas el portal. El objetivo principal con Google Analytics es aprender y mejorar el sitio para así poder obtener lo mejor de este.",
    "ask3": "Deshabilitar cookies",
    "answer3": "Sin embargo, si quieres puedes deshabilitar las cookies de este sitio o otro, recomendamos que compruebes la sección de ayuda de tu navegador para así poder deshabilitarlas."
  },
  "en": {
    "title": "Cookies policy",
    "ask1": "What is a cookie?",
    "answer1": "A cookie is a small piece of text sent to your browser by a website that you have visited. Help the web to remember information about your visit, such as your preferred language and other settings. This can make your next visit easier and the most useful site for you. Cookies play an important role. Without them, using the web would be a much more frustrating experience.",
    "ask2": "Google Analytics cookies",
    "answer2": "This site uses Google Analytics to better understand how you use the portal. The main objective with Google Analytics is to learn and improve the site in order to get the best out of it.",
    "ask3": "Disable cookies",
    "answer3": "However, if you want you can disable cookies from this site or another, we recommend that you check the help section of your browser in order to disable them."
  }
}
</i18n>

<template>
  <div class="legal-page">
    <PageClaim :title="$t('title')" background="bg_2" />
    <div
      v-for="(dialogue, index) in data.dialogues"
      :key="index"
      class="content-section-a"
      :v-if="data.dialogues != null"
    >
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h3 class="section-heading">{{ $t(dialogue.ask) }}</h3>
          </div>
          <div class="col-12">
            <p class="section-body">{{ $t(dialogue.answer) }}</p>
          </div>
        </div>
      </div>
    </div>
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
      data: {
        title: 'Política de cookies',
        class: 'cookies',
        dialogues: [
          {
            ask: 'ask1',
            answer: 'answer1'
          },
          {
            ask: 'ask2',
            answer: 'answer2'
          },
          {
            ask: 'ask3',
            answer: 'answer3'
          }
        ]
      }
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
  },
  computed: {
    meta() {
      return this.$store.state.meta.cookies
    }
  }
}
</script>
