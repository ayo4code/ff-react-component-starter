const path = require('path')
const typescriptPlugin = require('@rollup/plugin-typescript')
const resolve = require('@rollup/plugin-node-resolve')
const commonjs =require('@rollup/plugin-commonjs')

module.exports = [
  {
    input: 'src/index.tsx',
    output: {
      dir: path.resolve(__dirname, 'dist/es'),
      format: 'esm',
      preserveModules: true,
      sourcemap: true,
    },
    plugins: [
      resolve(),
      commonjs(),
      typescriptPlugin(),
    ],
    external: ['react']
  },
  {
    input: 'src/index.tsx',
    output: {
      dir: path.resolve(__dirname, 'dist/es'),
      format: 'esm',
      preserveModules: true,
    },
    plugins: [
      resolve(),
      commonjs(),
      typescriptPlugin({
        tsconfig: path.resolve(__dirname, 'type.tsconfig.json')
      }),
    ],
    external: ['react']
  }]