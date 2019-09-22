export default {
  mode: 'universal',

  head: {
    titleTemplate: 'Herolo Cinema - %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'This is a test assignment for Herolo' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
    ]
  },

  loading: { color: '#fff' },

  css: [

  ],

  /*
  ** To call .env varibale use process.env.VARIBALE_NAME
  */
  env: env.parsed,

  plugins: [
    '~/plugins/filters',
  ],

  buildModules: [
  ],

  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
  ],

  
  axios: {
    baseURL: 'http://www.omdbapi.com',
  },

  build: {
    extend (config, ctx) {
      config.resolve.alias['@'] = '~/components';
    }
  }
}
