import json from '@rollup/plugin-json'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import pkg from './package.json'

const externalDeps = Object.keys(Object.assign({}, pkg.dependencies, pkg.peerDependencies))

const nodeDeps = ['path', 'starwars-names.json', 'transformers-names.json']

export default {
    input: 'src/index.ts',
    external: externalDeps.concat(nodeDeps),
    output: [
        {
            file: pkg.module,
            format: 'es',
        },
        {
            file: pkg.main,
            format: 'cjs',
        },
    ],
    plugins: [
        nodeResolve(),
        commonjs(),
        json({
            preferConst: true,
        }),
        babel({
            exclude: 'node_modules/**',
        }),
        typescript(),
    ],
}
