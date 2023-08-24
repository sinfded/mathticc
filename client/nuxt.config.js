import colors from 'vuetify/es5/util/colors'
import { resolve } from 'path'

const isAppInDevelopment = /^dev(elopment)$/.test(process.env.NODE_ENV)
const useEmulators = false

const nuxtConfig = {
  baseUrl: process.env.APP_HOST,
  dev: isAppInDevelopment,
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'Mathticc',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/auth', mode: 'client' },
    { src: '~/plugins/notifier', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/components/App',
      '~/components/Global',
      '~/components/Materials',
      '~/components/Profile',
    ],
  },
  alias: {
    Component: resolve(__dirname, './components'),
    Assets: resolve(__dirname, './assets'),
    Data: resolve(__dirname, './data'),
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/firebase',
    '@nuxtjs/google-fonts',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },
  firebase: {
    config: {
      apiKey: 'AIzaSyA2UbNvJPbTVnuttL5lA9EW1GUEN0Pivlc',
      authDomain: 'mathticc.firebaseapp.com',
      databaseURL:
        'https://mathticc-default-rtdb.asia-southeast1.firebasedatabase.app',
      projectId: 'mathticc',
      storageBucket: 'mathticc.appspot.com',
      messagingSenderId: '818255090173',
      appId: '1:818255090173:web:3e5f514518581393c08994',
      measurementId: 'G-7QVB99SE4Q',
    },
    services: {
      auth: {
        persistence: 'local', // default
      },
      storage: {
        emulatorPort: isAppInDevelopment && useEmulators ? 9199 : undefined,
        emulatorHost: 'localhost',
      },
      database: {
        emulatorPort: isAppInDevelopment && useEmulators ? 9000 : undefined,
      },
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultAssets: {
      font: {
        family: 'Poppins',
      },
    },
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.lightBlue,
          accent: colors.lightBlue.darken3,
          secondary: colors.grey.darken3,
          info: colors.grey.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  server: {
    port: process.env.APP_PORT,
    host: process.env.APP_HOST,
    timing: isAppInDevelopment,
  },
}

export default Object.freeze(nuxtConfig)
