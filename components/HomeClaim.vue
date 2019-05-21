<template>
  <div id="home-claim" class="wrapper">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12 text-center">
          <div class="claim wow fadeInLeft">
            <h2>{{ data.claim }}</h2>
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
  data() {
    return {
      data: {
        claim: 'Tecnología para la Transformación Social'
      }
    }
  },
  mounted() {
    const myTypeItInstance = new TypeIt('#type-header')
      .options({
        speed: 100,
        deleteSpeed: 100
      })
      .type('Vota las propuestas de tu ciudad')
      .pause(1550)
      .delete(6)
      .type('pueblo')
      .pause(1750)
      .delete(6)
      .type('cooperativa')
      .pause(1750)
      .options({ deleteSpeed: 75 })
      .delete(100)
      .pause(1300)
      .type('Participa en las decisiones de tu ciudad')
      .pause(550)
      .delete(6)
      .type('<b>ciudad</b>')
      .pause(1500)
      .delete(100)
      .pause(500)
      .type('Consulta los presupuestos de tu ayuntamiento')
      .pause(1600)
      .delete(15)
      .type('TU AYUNTAMIENTO')
      .pause(2000)
      .options({ deleteSpeed: 50, speed: 75 })
      .delete(100)
      .pause(750)
      .type('Lanza propuestas ciudadanas')
      .pause(1300)
      .type('<br><b>Tu ayuntamiento te necesita</b>')
      .pause(1800)
      .delete(200)
      .pause(1750)
      .go()

    setTimeout(() => {
      myTypeItInstance.reset()
      myTypeItInstance.go()
    }, 6000)

    /*
        'Participa en las decisiones de tu ciudad',
        'Consulta los presupuestos de tu ayuntamiento',
        'Lanza propuestas ciudadanas' */
  }
}
</script>
