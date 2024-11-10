import * as path from "path";

export default defineNuxtConfig({
    modules: [
        "@primevue/nuxt-module",
        '@nuxtjs/google-fonts',
        '@nuxtjs/supabase',
        '@nuxtjs/color-mode',
        '@nuxtjs/seo',
        '@vue-email/nuxt',
        '@unlok-co/nuxt-stripe',

    ],
    css: [
        'primeicons/primeicons.css',
        '@/assets/styles/tailwind.css',
        '@/assets/styles/base.css',
    ],
    imports: {
        dirs: [
            './composables/useMarkdown',
            './composables/useServices',
            './composables/useLogger'
        ],
    },
    primevue: {
        options: { theme: 'none' },
    },
    postcss: {
        plugins: {
            'postcss-import': {},
            tailwindcss: {},
            autoprefixer: {}
        }
    },
    googleFonts: {
        base64: true,
        fontsDir: "assets/fonts",
        overwriting: true,
        families: {
            Inter: [300, 500, 800]
        }
    },

    site: {
        url: process.env.SITE_URL,
    },

    ogImage: {
        fonts: ['Inter:400', 'Inter:700'],
    },

    stripe: {
        client: {
            key: process.env.STRIPE_CLIENT_KEY,
        },

        server: {
            key: process.env.STRIPE_SECRET_KEY,
        },
    },

    supabase: {
        redirect: false,
    },

    runtimeConfig: {
        stripeProudctId5BRL: process.env.STRIPE_PRODUCT_ID_5BRL,
        stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
        resendKey: process.env.RESEND_KEY,

        public: {
            nodeEnv: process.env.NODE_ENV,
            supabaseUrl: process.env.SUPABASE_URL,
            supabaseKey: process.env.SUPABASE_KEY,
            siteUrl: process.env.SITE_URL,
        },
    },
})