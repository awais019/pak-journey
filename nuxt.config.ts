// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "@formkit/nuxt"],
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      BASE_URL: process.env.NUXT_BACKEND_URL,
      MAPBOX_TOKEN: process.env.MAPBOX_TOKEN,
    },
  },
});
