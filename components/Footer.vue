<template>
  <!-- footer -->
  <footer>
    <Newsletter />
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <ul class="contacts list-unstyled">
            <li class="contact">
              <a class="contact" :href="'mailto:' + footer.email">
                {{ footer.email }}
              </a>
            </li>
            <li class="contact">
              <a class="contact" href="tel: footer.phone">{{ footer.phone }}</a>
            </li>
            <li class="contact md">
              <p>
                {{ footer.address1 }}
                <br />
                {{ footer.address2 }}
                <br />
                {{ footer.zipcode }} {{ footer.city }}
              </p>
            </li>
            <li class="contact">
              <a class="sn" href="http://twitter.com/enreda" target="_blank">
                <font-awesome-layers class="fa-2x">
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
                <font-awesome-layers class="fa-2x">
                  <font-awesome-icon icon="circle" class="primary" />
                  <font-awesome-icon
                    :icon="['fab', 'facebook-f']"
                    transform="shrink-6"
                    class="white"
                  />
                </font-awesome-layers>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-md-8">
          <ul class="list-inline pull-right">
            <li>
              <a :href="localePath('cooperative')">Cooperativa</a>
            </li>
            <li class="footer-menu-divider">|</li>
            <li>
              <a :href="localePath('projects')">Proyectos</a>
            </li>
            <li class="footer-menu-divider">|</li>
            <li>
              <a href="http://blog.enreda.coop" target="_blank">Blog</a>
            </li>
            <li class="footer-menu-divider">|</li>
            <li></li>
            <li>
              <a href="/legal">Aviso legal</a>
            </li>
          </ul>
          <br />
          <br />
          <img
            src="~/assets/images/coop.png"
            class="pull-right img-black"
            width="150px"
            alt="Logo de la identidad de las cooperativas"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <p class="copyright text-muted small text-center">
            <img
              src="~/assets/images/50x50gris777-01.png"
              class="center img-responsive"
              alt="Logo de Enreda"
              width="50px"
            />
            <strong>{{ footer.current_year }}, {{ footer.site_name }}</strong>
            <br />
            {{ footer.copyleft }}
          </p>
        </div>
      </div>
    </div>
    <Cookies />
  </footer>
  <!-- end footer -->
</template>

<script>
import Cookies from '~/components/Cookies.vue'
import Newsletter from '~/components/Newsletter.vue'

export default {
  components: {
    Newsletter,
    Cookies
  },
  data() {
    return {
      footer: {
        site_name: 'ENREDA Cooperativa',
        site_name_short: 'Enreda',
        current_year: '2019',
        copyleft: 'Creative Commons, Algunos Derechos Reservados',
        google_analytics: 'UA-18017706-1',
        phone: '+34 954 32 35 05',
        email: 'info@enreda.coop',
        address1: 'Avda. República Argentina 25 Planta 9',
        address2: 'Espacio RES',
        city: 'Sevilla',
        zipcode: '41011'
      }
    }
  }
}
</script>
