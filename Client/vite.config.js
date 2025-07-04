import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/v1": {
        target: "https://project1-5-42ii.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
