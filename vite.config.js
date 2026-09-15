import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves project sites from https://<user>.github.io/<repo>/
// so the base path must match your repository name exactly.
// If you deploy to a custom domain or a user/organization page
// (username.github.io), change base back to '/'.
export default defineConfig({
  plugins: [react()],
  base: '/barca-lyadh/',
})
