import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Deployed to GitHub Pages at https://sam-1224.github.io/personal-portfolio/
// so all asset URLs are prefixed with /portfolio/.
export default defineConfig({
  base: '/personal-portfolio/',
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: false,
  },
})
