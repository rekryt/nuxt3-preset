import eslintPlugin from 'vite-plugin-eslint';
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@kevinmarrec/nuxt-pwa'],
    vite: {
        plugins: [
            eslintPlugin()
        ]
    },
    // build: {
    //     postcss: {
    //         postcssOptions: require('./postcss.config.1.js'),
    //     },
    // },
});
