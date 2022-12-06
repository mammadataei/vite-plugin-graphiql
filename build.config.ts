import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['src/node/index'],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
})
