import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    input: {
      app: "./index.html", // default
    },
  },
  resolve: {
    alias: {
      "./runtimeConfig": "./runtimeConfig.browser",
    },
},
})
