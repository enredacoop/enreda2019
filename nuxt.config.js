import webpack from 'webpack'
import pkg from './package'

const routerBase = {
  router: {
    base: '/enreda2019/'
  }
}

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'http://fonts.googleapis.com/css?family=Open+Sans:300,400,700,300italic,400italic,700italic'
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
    { src: '~/plugins/jquery.rss.js', ssr: false },
    { src: '~/plugins/app.js', ssr: false },
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
            iso: 'en-GB'
          },
          {
            code: 'es',
            iso: 'es-ES'
          }
        ],
        defaultLocale: 'es'
      }
    ],
    'cookie-universal-nuxt'
  ],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    vendor: ['jquery', 'bootstrap'],
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
  },
  routerBase
}
