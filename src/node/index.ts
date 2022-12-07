import type { Plugin } from 'vite'
import { fileURLToPath } from 'url'
import { resolve } from 'pathe'
import sirv from 'sirv'
import type { GraphiQLPluginOptions } from '../types'

const BASE_PATH = '/__graphiql'

export default function (options: GraphiQLPluginOptions): Plugin {
  return {
    name: 'vite-plugin-graphiql',
    apply: 'serve',
    async configureServer(server) {
      server.middlewares.use(BASE_PATH, serveClient())

      server.middlewares.use(`${BASE_PATH}_api`, (req, res, next) => {
        if (!req.url) {
          return next()
        }

        if (req.url === '/config') {
          res.setHeader('Content-Type', 'application/json')
          res.write(toJson(options.client))
          res.end()
          return
        }
      })
    },
  }
}

function serveClient() {
  const clientDist = resolve(fileURLToPath(import.meta.url), '../client')
  return sirv(clientDist, {
    single: true,
    dev: true,
  })
}

function toJson(obj: unknown) {
  return JSON.stringify(obj, null, 2)
}
