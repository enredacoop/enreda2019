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
    <div id="home-blog" class="wrapper">
      <div id="home-blog-title" class="container wow pulse">
        <div class="row">
          <div class="col-xs-12 text-center">
            <h2>{{ data.newstitle }}</h2>
          </div>
        </div>
      </div>
      <div id="home-blog-items" class="container wow pulse">
        <!-- load RSS feeds via JS -->
        <div id="loading-blog-items" class="row">
          <div class="col-xs-12 text-center">
            <p>Obteniendo noticias...</p>
          </div>
        </div>
      </div>
      <div id="home-blog-subscribe" class="container wow pulse">
        <div class="row">
          <div class="col-xs-12 text-center">
            <h3>{{ data.newssubscribe }}</h3>
            <div id="mc_embed_signup">
              <form
                id="mc-embedded-subscribe-form"
                action="//enreda.us3.list-manage.com/subscribe/post?u=279b072f7731d3c44289c5ffd&amp;id=f695e4a4d6"
                method="post"
                name="mc-embedded-subscribe-form"
                class="form-inline validate"
                target="_blank"
                novalidate
              >
                <div id="mc_embed_signup_scroll">
                  <div id="mce-responses" class="clear">
                    <div
                      id="mce-error-response"
                      class="response"
                      style="display:none"
                    ></div>
                    <div
                      id="mce-success-response"
                      class="response"
                      style="display:none"
                    ></div>
                  </div>
                  <div class="mc-field-group form-group">
                    <input
                      id="mce-EMAIL"
                      type="email"
                      value
                      name="EMAIL"
                      placeholder="Introduce tu correo..."
                      class="required email"
                    />
                  </div>
                  <div class="clear form-group">
                    <input
                      id="mc-embedded-subscribe"
                      type="submit"
                      value="Suscribirme"
                      name="subscribe"
                      class="button btn btn-default"
                    />
                  </div>
                </div>
              </form>
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
export default {
  components: {
    Services
  },
  data() {
    return {
      data: {
        claim: 'Tecnología para la Transformación Social',
        newstitle: 'Nuestras últimas noticias',
        newssubscribe: 'Mantente informada/o',
        quotetext: 'You affect the world by what you browse.',
        quoteauthor: 'Tim Berners-Lee'
      }
    }
  }
}
</script>
