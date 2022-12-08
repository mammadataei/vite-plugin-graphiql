<br/>

<h1 align='center'>Vite + GraphqiQL</h1>

<p align='center'>Integrate GraphiQL IDE in your Vite projects</p>

<br/>

Please note that this plugin is only intended to be used in development mode.

## Getting Started

First, install the plugin:

```bash
npm install --save-dev vite-plugin-graphiql

yarn add --dev vite-plugin-graphiql

pnpm add --save-dev vite-plugin-graphiql
```

[GraphiQL](https://github.com/graphql/graphiql/blob/main/packages/graphiql/README.md#using-as-package)
requires [`graphql`](https://github.com/graphql/graphql-js) to be installed in
your project; so install that too if you haven't already.

Then, import and add the plugin to your `vite.config.ts` and pass in the
required configuration options:

```ts
import { defineConfig } from 'vite'
import graphiql from 'vite-plugin-graphiql'

export default defineConfig({
  plugins: [
    graphiql({
      client: {
        url: 'https://mygraphqlapi.com/graphql',
      },
    }),
  ],
})
```

Now start your dev server and navigate to `http://localhost:5173/__graphiql` to
see the GraphiQL IDE.

## Configuration

You can find the full configuration options [here](src/types.ts).

## Acknowledgments

Inspired by
[@unocss/inspector](https://github.com/unocss/unocss/tree/main/packages/inspector)

## License

Licensed under the [MIT License](LICENSE).
