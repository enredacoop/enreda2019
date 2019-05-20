<i18n>
{
  "es": {
    "home": "Inicio",
    "cooperative": "Cooperativa",
    "projects": "Proyectos",
    "blog": "Blog",
    "lang": "Español",
    "spanish": "Español",
    "english": "English"
  },
  "en": {
    "home": "Home",
    "cooperative": "Cooperative",
    "projects": "Projects",
    "blog": "Blog",
    "lang": "English",
    "spanish": "Español",
    "english": "English"
  }
}
</i18n>

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
          <b-nav-item href="http://blog.enreda.coop" target="_blank">{{
            $t('blog')
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
