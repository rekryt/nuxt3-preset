// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', 'nuxt-purgecss', '@kevinmarrec/nuxt-pwa'],
    purgecss: {
        enabled: true, // Always enable purgecss or process.env.NODE_ENV === 'production'
        safelist: ['html', 'body', 'a', 'nuxt-progress', 'is-active'],
    },
    css: ['~/assets/css/tailwind.css'],
    // build: {
    //     postcss: {
    //         postcssOptions: require('./postcss.config.js'),
    //     },
    // },
});
