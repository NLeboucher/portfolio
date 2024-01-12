export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@intlify/nuxt3',
  ],
  experimental: {
    reactivityTransform: true,
    viteNode: false,
  },
  plugins: [{ src: '~/plugins/vercel.ts', mode: 'client' }],
  colorMode: {
    classSuffix: '',
  },
  hooks: {
    'vite:extendConfig': function (config: any, { isServer }: any) {
      if (isServer) {
        config.build.rollupOptions.output.inlineDynamicImports = true;
      }
    },
  },
  css: ['/assets/css/style.css'],
  build: {
    transpile: ['primevue', 'pinia-orm'],
    vite: false,
    
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: true,
    injectPosition: 0,
    viewer: true,
  },
  vue: {
    config: {
      productionTip: true,
      warn: false,
    },
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith('ion-'),
    },
  },
  loading: {
    color: 'blue',
    height: '5px',
  },
  
  // GitHub Pages configuration
  target: 'static',
  router: {
    base: '/portfolio/' // Update with your GitHub repository name
  },
});