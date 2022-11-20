// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: { shim: false },
  modules: ["nuxt-windicss", "nuxt-headlessui", "@pinia/nuxt"],
  headlessui: {
    prefix: "",
  },
});
