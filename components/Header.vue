<i18n>
{
  "es": {
    "home": "Inicio",
    "cooperative": "Cooperativa",
    "projects": "Proyectos",
    "blog": "Blog"
  },
  "en": {
    "home": "Home",
    "cooperative": "Cooperative",
    "projects": "Projects",
    "blog": "Blog"
  }
}
</i18n>

<template>
  <header>
    <nav>
      <nuxt-link :to="localePath('index')">{{ $t('home') }}</nuxt-link>
      <nuxt-link :to="localePath('cooperative')">{{
        $t('cooperative')
      }}</nuxt-link>
      <nuxt-link :to="localePath('projects')">{{ $t('projects') }}</nuxt-link>
      <a href="http://blog.enreda.coop" about="_blank">{{ $t('blog') }}</a>
      <nuxt-link :to="switchLocalePath('es')">Español</nuxt-link>
      <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
    </nav>
  </header>
</template>
