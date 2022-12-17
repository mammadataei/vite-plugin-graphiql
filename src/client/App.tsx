import { GraphiQL } from 'graphiql'
import { useEffect, useMemo, useState } from 'react'
import { createGraphiQLFetcher } from '@graphiql/toolkit'
import { useExplorerPlugin } from '@graphiql/plugin-explorer'
import { fetchClientConfig } from './utils/fetchClientConfig'
import type { ClientOptions } from '../types'

import 'graphiql/graphiql.css'
import '@graphiql/plugin-explorer/dist/style.css'

const DEFAULT_QUERY = ''

export default function App() {
  const [config, setConfig] = useState<ClientOptions | null>(null)
  const [query, setQuery] = useState(DEFAULT_QUERY)

  const explorerPlugin = useExplorerPlugin({ query, onEdit: setQuery })

  useEffect(() => {
    fetchClientConfig().then((config) => {
      setConfig(config)
    })
  }, [])

  const fetcher = useMemo(() => {
    if (!config) return null

    return createGraphiQLFetcher({
      url: config.url,
    })
  }, [config])

  if (!config || !fetcher) {
    return null
  }

  return (
    <GraphiQL
      fetcher={fetcher}
      query={query}
      onEditQuery={setQuery}
      plugins={[explorerPlugin]}
    />
  )
}
