import { GraphiQL } from 'graphiql'
import { useEffect, useMemo, useState } from 'react'
import { createGraphiQLFetcher } from '@graphiql/toolkit'
import { fetchClientConfig } from './utils/fetchClientConfig'
import type { ClientOptions } from '../types'
import 'graphiql/graphiql.css'

export default function App() {
  const [config, setConfig] = useState<ClientOptions | null>(null)

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

  return <GraphiQL fetcher={fetcher} />
}
