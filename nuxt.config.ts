// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: true,
    css: ['@/assets/styles/main.css'],
    modules: [
        '@nuxtjs/tailwindcss',
        [
            '@pinia/nuxt',
            {
                autoImports: [
                    // automatically imports `defineStore`
                    'defineStore', // import { defineStore } from 'pinia'
                    // automatically imports `defineStore` as `definePiniaStore`
                    ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
                ],
            },
        ],
    ],
    app: {
        head: {
            link: [
                {rel: "icon", type: "image/png", href: "/favicon.svg"}
            ]
        }
    },
    devServer: {
        host: '0.0.0.0',
        port: 3000
    },
    runtimeConfig: {
        public: {
            baseURL: "localhost",
        },
    },
    devServerHandlers: [],
    nitro: {
        serveStatic: true,
    },
    experimental: {
        payloadExtraction: false
    }
})
