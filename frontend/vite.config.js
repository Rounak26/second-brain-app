import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
    plugins: [
        react(),
        tailwindcss()],
    server: {
        hmr: true, // HMR is enabled by default
        port: 5173, // Optional: change port
    }
})