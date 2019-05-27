<i18n>
{
  "es": {
    "claim": "Tecnología para la Transformación Social",
    "phrase_1": "Vota las propuestas de tu ciudad",
    "phrase_2": "Participa en las decisiones de tu ciudad",
    "phrase_3": "Consulta los presupuestos de tu ayuntamiento",
    "phrase_4": "Lanza propuestas ciudadanas",
    "phrase_5": "Tu ayuntamiento te necesita",
  },
  "en": {
    "claim": "Technology for Social Transformation",
    "phrase_1": "Vote your city's proposals",
    "phrase_2": "Participate in the decisions of your city",
    "phrase_3": "Check the budgets of your town hall",
    "phrase_4": "Launches citizen proposals",
    "phrase_5": "Your city council needs you",
  }
}
</i18n>
<template>
  <div id="home-claim" class="wrapper">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12 text-center">
          <div class="claim wow fadeInLeft">
            <h1>{{ $t('claim') }}</h1>
            <div id="type-header"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TypeIt from 'typeit'
export default {
  mounted() {
    let translations = this.$i18n.messages.es
    if (this.$i18n.locale === 'en') {
      translations = this.$i18n.messages.en
    }
    const myTypeItInstance = new TypeIt('#type-header')
      .options({
        speed: 100,
        deleteSpeed: 100
      })
      .type(translations.phrase_1)
      .pause(1750)
      .delete(100)
      .options({ deleteSpeed: 75 })
      .pause(700)
      .type(translations.phrase_2)
      .pause(1700)
      .delete(100)
      .pause(500)
      .type(translations.phrase_3)
      .pause(2000)
      .options({ deleteSpeed: 50, speed: 75 })
      .delete(100)
      .pause(550)
      .type(translations.phrase_4)
      .pause(1750)
      .delete(100)
      .pause(550)
      .type(translations.phrase_5)
      .pause(1800)
      .delete(100)
      .pause(550)
      .go()

    setTimeout(() => {
      myTypeItInstance.reset()
      myTypeItInstance.go()
    }, 60000)
  }
}
</script>
