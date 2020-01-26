
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'stylesheet', href: '/style.css' },
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat&display=swap'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{src: '~/plugins/vuex-persist', ssr: false }, '~/plugins/api.js'],
  /*
  ** Nuxt.js dev-modules
  */
/*  buildModules: [
    '@nuxtjs/vuetify'
  ],*/
  /*
  ** Nuxt.js modules
  */
  modules: ['@nuxtjs/axios'],
  axios: {
    baseURL: 'http://193.9.60.137:10022/'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
