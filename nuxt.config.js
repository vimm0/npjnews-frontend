const pkg = require('./package')
const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: 'Npj News Portal',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      // {name:"viewport", content:"width=device-width, initial-scale=1, shrink-to-fit=no"},
      {hid: 'description', name: 'description', content: pkg.description}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.png'},
      {rel: 'stylesheet', href: '/style.css'},
    ],
    metaInfo: {
      script: [
        // {src: "js/jquery/jquery-2.2.4.min.js", body: true},
        // {src: "js/plugins/plugins.js", body: true},
        // {src: "js/active.js", body: true},
      ]
    },
    script: [
      // {
      //   src: 'https://code.jquery.com/jquery-3.1.1.slim.min.js'
      // },
      // {
      //   type: 'text/javascript',
      //   src: "/js/jquery/jquery-2.2.4.min.js"
      // },
      // {
      //   src: "/js/bootstrap/popper.min.js",
      //   body: true
      // },
      // {
      //   src: "/js/bootstrap/bootstrap.min.js",
      //   body: true
      // },
      // {
      //   type: 'text/javascript',
      //   src: "/js/plugins/plugins.js",
      //   body: false
      // },
      // {
      //   type: 'text/javascript',
      //   src: "/js/active.js",
      //   body: false
      // },
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~/plugins/axios.js'},
  ],
  env: {
    API_URL: isDev ? 'http://127.0.0.1:8000/' : 'https://npjnewsportal.com/'
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
