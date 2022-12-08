export interface GraphiQLPluginOptions {
  /**
   * The GraphiQL client configuration.
   */
  client: ClientOptions
}

export interface ClientOptions {
  /**
   * Url for http(s) requests to the GraphQL server.
   */
  url: string
}
