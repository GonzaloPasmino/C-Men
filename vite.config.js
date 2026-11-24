import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base: el nombre del repo, porque GitHub Pages sirve la web en /C-Men/
export default defineConfig({
  base: '/C-Men/',
  plugins: [react(), tailwindcss()],
})
