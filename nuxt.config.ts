// https://nuxt.com/docs/api/configuration/nuxt-config
import {defineNuxtConfig} from 'nuxt/config'


export default defineNuxtConfig({


    modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge',],
    // @ts-ignore

    buildModules: [
        '@nuxtjs/moment',

    ],
    loading: '~/components/loading.vue',


    runtimeConfig: {

        // The private keys which are only available within server-side

        // Keys within public, will be also exposed to the client-side
        public: {
            appname: 'Mevio',
            apiBase: 'https://api.themoviedb.org/3/',
            apiSecret: process.env["apiKey"],

        }
    },

    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: true,

    // Global page headers: https://go.nuxtjs.dev/config-head
    app: {

        head: {
            bodyAttrs: {
                class: 'bg-gray-900 no-scrollbar selection:bg-indigo-300 selection:text-fuchsia-900'
            },
            title: 'Movie website',
            htmlAttrs: {
                lang: 'en',
                class: "dark"
            },
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {hid: 'description', name: 'description', content: ''},
                {name: 'format-detection', content: 'telephone=no'}
            ],
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}

            ]
        },
    }
    // css: [
    //     '@/assets/css/tailwind.css',
    // ],
    // build: {
    //     postcss: {
    //         postcssOptions: {
    //             plugins: {
    //                 tailwindcss: {},
    //                 autoprefixer: {},
    //             },
    //         },
    //     },
    // }
})
