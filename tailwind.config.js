/** @type {import('tailwindcss').Config} */
const primeui = require("tailwindcss-primeui");

module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./modules/**/*.vue",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
        "./error.vue"
    ],
    darkMode: "class",
    plugins: [primeui],
};
