<template>
  <!-- header -->
  <header>
    <b-navbar id="e-navbar" toggleable="lg" variant="info">
      <b-navbar-brand href="#" :to="localePath('index')">
        <img
          id="navbar-brand-logo"
          src="~/assets/images/logo_enreda.png"
          alt="ENREDA"
        />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" :to="localePath('cooperative')">{{
            $t('cooperative')
          }}</b-nav-item>
          <b-nav-item href="#" :to="localePath('projects')">{{
            $t('projects')
          }}</b-nav-item>
          <b-nav-item-dropdown :text="$t('services.services')" right>
            <b-dropdown-item
              :to="
                localePath({
                  name: 'services-participaciondigital'
                })
              "
              >{{ $t('services.service_1') }}</b-dropdown-item
            >
            <b-dropdown-item
              :to="
                localePath({
                  name: 'services-participacionciudadana'
                })
              "
              >{{ $t('services.service_2') }}</b-dropdown-item
            >

            <b-dropdown-item
              :to="
                localePath({
                  name: 'services-disenodesarrolloproducto'
                })
              "
              >{{ $t('services.service_3') }}</b-dropdown-item
            >
            <b-dropdown-item
              :to="
                localePath({
                  name: 'services-analitica-bigdata'
                })
              "
              >{{ $t('services.service_4') }}</b-dropdown-item
            >
            <b-dropdown-item
              :to="
                localePath({
                  name: 'services-transparencia'
                })
              "
              >{{ $t('services.service_5') }}</b-dropdown-item
            >
            <b-dropdown-item href="http://edusi.eu/"
              >{{ $t('services.service_6') }}
              <font-awesome-icon
                :icon="['fas', 'external-link-alt']"
                transform="shrink-6"
            /></b-dropdown-item>
            <b-dropdown-item href="http://lynxanalytica.com/"
              >Lynx Analytica
              <font-awesome-icon
                :icon="['fas', 'external-link-alt']"
                transform="shrink-6"
            /></b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item href="http://blog.enreda.coop" target="_blank">
            {{ $t('blog') }}
            <font-awesome-icon
              :icon="['fas', 'external-link-alt']"
              transform="shrink-6"
          /></b-nav-item>
          <b-nav-item href="#" :to="localePath('contact')">{{
            $t('contact')
          }}</b-nav-item>
          <b-nav-item
            v-for="locale in availableLocales"
            :key="locale"
            :to="switchLocalePath(locale)"
          >
            <template v-if="locale == 'es'">
              {{ $t('spanish') }}
            </template>
            <template v-else>
              {{ $t('english') }}
            </template>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
  <!-- end header -->
</template>
<script></script>

<script>
export default {
  mounted() {
    // make an event listener and pass the right `this` through
    window.onload = function() {
      navbarControl()
    }
    window.onscroll = function() {
      navbarControl()
    }

    let header = document.getElementById('e-navbar')
    let sticky = header.offsetTop

    function navbarControl() {
      if (window.pageYOffset > sticky) {
        $(header).addClass('sticky')
        $('#navbar-brand-logo').addClass('sticky')
        $('#navbar-brand-logo').attr(
          'src',
          require('~/assets/images/logo_enreda_horizontal.png')
        )
      } else {
        $(header).removeClass('sticky')
        $('#navbar-brand-logo').removeClass('sticky')
        $('#navbar-brand-logo').attr(
          'src',
          require('~/assets/images/logo_enreda.png')
        )
      }
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.availableLocales.filter(i => i !== this.$i18n.locale)
    }
  }
}
</script>
