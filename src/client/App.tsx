import { createGraphiQLFetcher } from '@graphiql/toolkit'
import { GraphiQL } from 'graphiql'
import 'graphiql/graphiql.css'

const fetcher = createGraphiQLFetcher({
  url: 'https://graphqlzero.almansi.me/api',
})

export default function App() {
  return <GraphiQL fetcher={fetcher} />
}
