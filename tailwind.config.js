/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: "#0C0B08",
                "dark-card": "#161410",
                "dark-section": "#1A1810",
                light: "#F4F1EB",
                "light-card": "#FFFFFF",
                accent: "#C9A84C",
                "accent-hover": "#E2B959",
                "accent-text": "#0C0B08",
                // Brand Aliases
                obsidian: "#0C0B08",
                ivory: "#F4F1EB",
                champagne: "#C9A84C"
            },
            fontFamily: {
                display: ["Plus Jakarta Sans", "Inter", "sans-serif"],
                serif: ["Instrument Serif", "Georgia", "serif"],
                mono: ["JetBrains Mono", "monospace"]
            },
        },
    },
    plugins: [],
}
