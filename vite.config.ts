import { defineConfig } from 'vite'
import circleDependency from 'vite-plugin-circular-dependency'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    circleDependency({
      outputFilePath: './circleDep'
    })
  ],
  server: {
    watch: {
      usePolling: true
    }
  }
})
