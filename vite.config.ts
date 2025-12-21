import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/4blanc-web/',
  build: {
    outDir: 'dist',
  },
})
