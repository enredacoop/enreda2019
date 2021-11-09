import webpack from 'webpack'

export default {
  router: {
    base: '/' /* GitHub: '/enreda2019' | Producción: '/' */
  },
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Tecnología para la Transformación Social',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'cooperativa, tecnología, social'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Tecnología para la Transformación Social'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,300italic,400italic,700italic'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [
    '@/assets/css/example.css',
    { src: '@/assets/less/colors.less', lang: 'less' },
    { src: '@/assets/less/main.less', lang: 'less' },
    { src: '@/assets/less/mixins.less', lang: 'less' },
    { src: '@/assets/less/sizes.less', lang: 'less' }
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/vue-moment.js', ssr: false },
    { src: '~/plugins/vue-bootstrap.js', ssr: false },
    { src: '~/plugins/vue-isotope', ssr: false }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ],
    [
      '@nuxtjs/google-analytics',
      {
        id: '333'
      }
    ],
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'en',
            iso: 'en-GB',
            file: 'en-GB.js'
          },
          {
            code: 'es',
            iso: 'es-ES',
            file: 'es-ES.js'
          }
        ],
        defaultLocale: 'es',
        vueI18n: {
          fallbackLocale: 'es',
          messages: {
            en: require('./locales/en-GB.json'),
            es: require('./locales/es-ES.json')
          }
        }
      }
    ],
    'cookie-universal-nuxt',
    '@nuxtjs/moment',
    'nuxt-leaflet'
  ],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ],
    loaders: {
      less: { javascriptEnabled: true }
    },
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      config.module.rules.push({
        resourceQuery: /blockType=i18n/,
        type: 'javascript/auto',
        loader: ['@kazupon/vue-i18n-loader', 'yaml-loader']
      })
    }
  }
}
