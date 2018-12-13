const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'News Paper - News & Lifestyle Magazine',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      // {name:"viewport", content:"width=device-width, initial-scale=1, shrink-to-fit=no"},
      {hid: 'description', name: 'description', content: pkg.description}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: '/style.css'},
    ]
  },
  script: [
    // {
    //   type: 'text/javascript',
    //   src: "js/jquery/jquery-2.2.4.min.js",
    //   body: true
    // },
    // {
    //   src: "js/bootstrap/popper.min.js",
    //   body: true
    // },
    // {
    //   src: "js/bootstrap/bootstrap.min.js",
    //   body: true
    // },
    // {
    //   type: 'text/javascript',
    //   src: "js/plugins/plugins.js",
    //   body: true
    // },
    // {
    //   type: 'text/javascript',
    //   src: "js/active.js",
    //   body: true
    // },
  ],
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
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // 'vue-meta'
  ],
  // metaInfo: {
  //   bodyScript: [
  //     {src: 'js/plugins/plugins.js'},
  //     {src: 'js/active.js'},
  //     {src: 'js/jquery/jquery-2.2.4.min.js'},
  //   ]
  // },
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
