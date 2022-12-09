import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/__graphiql/',
  build: {
    outDir: './dist/client',
  },
  publicDir: 'src/client/public',
})
