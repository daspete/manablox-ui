const { resolve } = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  rootDir: resolve(__dirname, '../..'),
  srcDir: __dirname,
  dev: false,
  render: {
    resourceHints: false
  },
  modules: ['@@'],
  build: {
    babel: {
        plugins: [
            ["transform-imports", {
                "vuetify": {
                    "transform": "vuetify/es5/components/${member}",
                    "preventFullImport": true
                }
            }]
        ]
    },
    extend(config, ctx) {
        if (ctx.isServer) {
            config.externals = [
                nodeExternals({
                    whitelist: [/^vuetify/]
                })
            ]
        }
    }
  }
}
