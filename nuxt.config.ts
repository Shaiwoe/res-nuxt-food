// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                dir: "rtl",
                lang: "fa",
            },
        },
    },

    runtimeConfig: {
        public: {
            // apiBase: "http://localhost:8000/api",
            apiBase: "https://api.menuoff.site/api",
        },
    },
    
    css: ['~/assets/css/main.css'],

    modules: ['@formkit/nuxt'],

    build: {
        transpile: ["vue-toastification"],
    },

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
