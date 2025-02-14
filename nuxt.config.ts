export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxt/eslint", "@nuxt/image", "@nuxt/icon"],
  css: ["~/assets/css/main.css"],
  pinia: {
    storesDirs: ["~/stores/**"],
  },
});
