<i18n>
{
  "es": {
    "site_name": "ENREDA Cooperativa",
    "copyleft": "Creative Commons, Algunos Derechos Reservados",
    "projects": "Proyectos",
    "blog": "Blog",
    "legal_warning": "Aviso legal",
    "cookies_policy": "Políticas de Cookies",
    "cooperative": "Cooperativa",
  },
  "en": {
    "site_name": "ENREDA Cooperative",
    "copyleft": "Creative Commons, Some Rights Reserved",
    "cooperative": "Cooperative",
    "projects": "Projects",
    "blog": "Blog",
    "legal_warning": "Legal warning",
    "cookies_policy": "Cookies policy",
  }
}
</i18n>
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
              <a class="contact" :href="'tel:' + footer.phone">{{
                footer.phone
              }}</a>
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
              <a
                class="sn"
                href="http://twitter.com/enreda"
                target="_blank"
                rel="noopener noreferrer"
              >
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
                rel="noopener noreferrer"
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
              <a
                class="sn"
                href="https://www.linkedin.com/company/enreda"
                target="_blank"
                rel="noopener noreferrer"
              >
                <font-awesome-layers class="fa-2x">
                  <font-awesome-icon icon="circle" class="primary" />
                  <font-awesome-icon
                    :icon="['fab', 'linkedin-in']"
                    transform="shrink-6"
                    class="white"
                  />
                </font-awesome-layers>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-md-4" style="margin-left: 5px">
          <MenuFooter />
        </div>
        <div class="col-md-12 col-sm-12 col-lg-12">
          <div class="pull-right">
            <Goals />
          </div>
        </div>
        <div class="col-md-12 col-sm-12 col-lg-12">
          <ul class="list-inline pull-right">
            <li>
              <nuxt-link :to="localePath({ name: 'legal' })">{{
                $t('legal_warning')
              }}</nuxt-link>
            </li>
            <li class="footer-menu-divider">|</li>
            <li>
              <nuxt-link :to="localePath({ name: 'cookies' })">{{
                $t('cookies_policy')
              }}</nuxt-link>
            </li>
          </ul>
          <br />
          <br />
          <div class="logos-footer">
            <a
              href="https://www.ica.coop/es"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="~/assets/images/coop.png"
                class="pull-right img-black"
                width="140px"
                alt="Logo de la identidad de las cooperativas"
              />
            </a>
            <a
              href="https://www.ica.coop/es"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="~/assets/images/consul_logo.png"
                class="pull-right img-black"
                width="140px"
                alt="Logo de Consul Democracy Foundation"
              />
            </a>
            <a
              href="https://openods.es/es/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="~/assets/images/ods.png"
                class="pull-right img-black"
                width="140px"
                alt="Logo de Open ODS"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <p class="copyright text-muted small text-center">
            <img
              src="~/assets/images/enreda_footer.png"
              class="center img-responsive"
              alt="Logo de Enreda"
              width="50px"
            />
            <strong>{{ footer.current_year }}, {{ $t('site_name') }}</strong>
            <br />
            <a
              href="https://creativecommons.org/licenses/by-nc-nd/3.0/es/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-muted"
              >{{ $t('copyleft') }}</a
            >
          </p>
        </div>
      </div>
    </div>
    <Cookies />
  </footer>
  <!-- end footer -->
</template>

<script>
import Cookies from '~/components/layout/Cookies.vue'
import Newsletter from '~/components/layout/Newsletter.vue'
import Goals from '~/components/layout/Goals.vue'
import MenuFooter from '~/components/layout/MenuFooter.vue'

export default {
  components: {
    Newsletter,
    Goals,
    Cookies,
    MenuFooter
  },
  data() {
    return {
      footer: {
        site_name_short: 'Enreda',
        current_year: new Date().getFullYear(),
        google_analytics: 'UA-18017706-1',
        phone: '+34 693 55 45 18',
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
