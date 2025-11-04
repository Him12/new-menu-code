import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Replace 'new-menu-code' with your actual repo name
export default defineConfig({
  plugins: [react()],
  base: '/new-menu-code/', 
})
