export function fetchClientConfig() {
  return fetch('/__graphiql_api/config')
    .then((res) => res.json())
    .catch(() => {
      throw new Error(`Failed to fetch config`)
    })
}
