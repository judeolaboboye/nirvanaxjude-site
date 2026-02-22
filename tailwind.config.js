/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                obsidian: "#0D0D12",
                champagne: "#C9A84C",
                ivory: "#FAF8F5",
                slate: "#2A2A35"
            },
            fontFamily: {
                ui: ["Inter", "sans-serif"],
                drama: ["Playfair Display", "serif"],
                mono: ["JetBrains Mono", "monospace"]
            },
            backgroundImage: {
                'hero-gradient': 'linear-gradient(to top, rgba(13, 13, 18, 1) 0%, rgba(13, 13, 18, 0.4) 50%, rgba(13, 13, 18, 0.1) 100%)',
            }
        },
    },
    plugins: [],
}
