export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  router: {
    base: '/alloffabric.com/'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'alloffabric.com',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // Normalize
    'modern-normalize',
    // Settings
    '@/assets/css/settings/font-face.css',
    '@/assets/css/settings/breakpoints.css',
    '@/assets/css/settings/variables.css',
    // Generic
    '@/assets/css/generic/reset.css',
    '@/assets/css/generic/typography.css',
    // Utilities
    '@/assets/css/utilities/sr-only.css',
    '@/assets/css/utilities/aos.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/aos.client.js',
    '~/plugins/helpers.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/components/homepage'
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://google-fonts.nuxtjs.org/
    '@nuxtjs/google-fonts',
    // https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg',
  ],

  googleFonts: {
    families: {
      'Red Hat Display': [400, 500, 700, 900]
    },
    preload: true,
    display: 'swap',
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/markdownit'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config) {
      config.module.rules.push({
        test: /\.zip$/,
        use: [
          {
            loader: 'raw-loader',
            options: {
              esModule: false
            }
          }
        ]
      })
    },
    postcss: {
      plugins: {
        'postcss-preset-env': {
          stage: 1,
          // custom-media breakpoints in .vue files won't work without this
          importFrom: './assets/css/settings/breakpoints.css',
        },
        'postcss-pxtorem': {
          propList: ['*', '!border*'],
        }
      }
    },
  }
}
