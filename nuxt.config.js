export default {
  target: 'static',
  router: {
    base: '/stocker/'
  },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Stocker',
    htmlAttrs: {
      lang: 'zh'
    },
    meta: [
      {charset: 'utf-8'},
      {cash: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', cash: 'description', content: ''},
      {cash: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],
  bootstrapVue: {
    icons: true,
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
