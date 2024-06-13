import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    strictPort: true,
    port: 5173,
  },
  define: {
    VITE_APP_BACKEND_HOST: JSON.stringify(process.env.VITE_APP_BACKEND_HOST),
  }
   
})
