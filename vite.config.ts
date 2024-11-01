import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
// git subtree push --prefix dist origin gh-pages 
export default defineConfig({
  base: '/firebase-notification/',
  plugins: [vue()],
})
