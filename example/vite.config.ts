import { defineConfig } from 'vite'
import graphiql from 'vite-plugin-graphiql'

export default defineConfig({
  plugins: [
    graphiql({
      client: {
        url: 'https://graphqlzero.almansi.me/api',
      },
    }),
  ],
})
