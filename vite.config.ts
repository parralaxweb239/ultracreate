import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/creative-library/',
  plugins: [react()],
  define: {
    // This makes process.env.API_KEY available in your client-side code.
    // Vite replaces this with the value of import.meta.env.VITE_API_KEY during build.
    'process.env.API_KEY': JSON.stringify(process.env.VITE_API_KEY)
  }
})
