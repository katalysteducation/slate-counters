import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/index.es.js',
            format: 'es',
            sourcemap: true,
        },
        {
            file: 'dist/index.cjs.js',
            format: 'cjs',
            sourcemap: true,
            exports: 'named',
        },
    ],
    plugins: [
        babel({
            exclude: 'node_modules/**',
            runtimeHelpers: true,
        }),
        resolve(),
    ],
    external: [
        'immutable',
        'prop-types',
        'react',
        'slate',
        'babel-runtime/helpers/inherits',
        'babel-runtime/helpers/classCallCheck',
        'babel-runtime/helpers/possibleConstructorReturn',
        'babel-runtime/core-js/object/get-prototype-of',
        'babel-runtime/core-js/map',
        'babel-runtime/helpers/createClass',
        'babel-runtime/core-js/get-iterator',
        'babel-runtime/helpers/slicedToArray',
        'babel-runtime/helpers/extends',
        'babel-runtime/core-js/object/entries',
        'babel-runtime/core-js/object/freeze',
        'babel-runtime/regenerator',
        'babel-runtime/helpers/typeof',
        'babel-runtime/helpers/toConsumableArray',
    ]
}
