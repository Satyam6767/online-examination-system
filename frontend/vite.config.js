import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // '/api': 'http://localhost:3000'

      '/api': 'https://online-examination-system-nine.vercel.app/'
    }
  },
  plugins: [react()],
})
