import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/notion-api': {
                target: 'https://api.notion.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/notion-api/, '')
            },
            '/vapi-api': {
                target: 'https://api.vapi.ai',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/vapi-api/, '')
            }
        }
    }
})
