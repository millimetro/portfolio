export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',



  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'millimetro_',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],

    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.2/gsap.min.js'},
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.2/ScrollTrigger.min.js'},

      { src: 'https://cdnjs.cloudflare.com/ajax/libs/smooth-scrollbar/8.7.4/smooth-scrollbar.js'},
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.6.8/lottie.min.js'},


      // Librerie per blocchettino__loader
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js'},

    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

 
  server: {
    host: '0' // default: localhost
  }
  
}
