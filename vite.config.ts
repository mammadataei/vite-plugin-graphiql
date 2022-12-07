import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import graphiql from './src/node'

export default defineConfig({
  plugins: [
    react(),
    graphiql({
      client: {
        url: 'https://graphqlzero.almansi.me/api',
      },
    }),
  ],
  build: {
    outDir: './dist/client',
  },
  publicDir: 'src/client/public',
})
