<template>
  <div>
    <div id="home-claim" class="wrapper">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12 text-center">
            <div class="claim wow fadeInLeft">
              <h2>{{ data.claim }}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Services />

    <Consul />

    <div id="home-blog" class="wrapper">
      <div id="home-blog-title" class="container wow pulse">
        <div class="row">
          <div class="col-12 text-center">
            <h2>{{ data.newstitle }}</h2>
          </div>
        </div>
      </div>
      <div id="home-blog-items" class="container wow pulse">
        <!-- load RSS feeds via JS -->
        <div id="loading-blog-items" class="row">
          <div class="col-12">
            <div class="row block-news loading">
              <div class="card">
                <div class="card-img-overlay">
                  <h5 class="card-title"></h5>
                  <small></small>
                </div>
              </div>
              <div class="card">
                <div class="card-img-overlay">
                  <h5 class="card-title"></h5>
                  <small></small>
                </div>
              </div>
              <div class="card">
                <div class="card-img-overlay">
                  <h5 class="card-title"></h5>
                  <small></small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="home-days" class="wrapper-content">
      <div class="container">
        <div class="row wow fadeInRight">
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <h4 class="daysnumber text-right"></h4>
          </div>
          <div class="col-lg-4 col-md-5 col-sm-6 col-xs-12">
            <div class="daystext">
              días contribuyendo, desde la economía social y solidaria, a
              transformar la realidad social.
            </div>
          </div>
        </div>
        <div class="row"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Services from '~/components/Services.vue'
import Consul from '~/components/Consul.vue'
export default {
  components: {
    Services,
    Consul
  },
  data() {
    return {
      data: {
        claim: 'Tecnología para la Transformación Social',
        newstitle: 'Nuestras últimas noticias',
        quotetext: 'You affect the world by what you browse.',
        quoteauthor: 'Tim Berners-Lee'
      }
    }
  }
}
</script>
