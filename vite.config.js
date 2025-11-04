import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Change the base path to match your GitHub repo name for GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/react-web-AR/', // update this to your repo name
})
