import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Deployed to GitHub Pages at https://sam-1224.github.io/portfolio/
// so all asset URLs are prefixed with /portfolio/.
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: false,
  },
})
