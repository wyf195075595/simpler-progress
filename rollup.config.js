// 支持 导入 josn 文件
import json from 'rollup-plugin-json'
// 支持导入 npm 第三方模块
import resolve from 'rollup-plugin-node-resolve'
// 兼容 commonJs 模块
import commonjs from 'rollup-plugin-commonjs'
// 大小写转换
import changeCase from 'change-case'
// 创建注释
import createBanner from 'create-banner'
// 语法降级
import { babel } from '@rollup/plugin-babel'
// 代码压缩
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json' assert { type: "json" }

let name = changeCase.pascalCase(pkg.name);
const banner = createBanner({
    data: {
      name: `${name}.js`,
      year: '2023-present',
    },
});

console.log(name);
export default {
    // 入口文件
    input: "src/index.js",
    // 输出路径
    output: [
        {
            file: `dist/${pkg.name}.amd.js`,
            banner,
            name,
            format: "amd"
        },
        {
            banner,
            name,
            file: `dist/${pkg.name}.js`,
            format: 'umd',
        },
        {
            banner,
            name,
            file: `dist/${pkg.name}.common.js`,
            format: 'cjs',
            exports: 'auto',
        },
        {
            banner,
            name,
            file: `dist/${pkg.name}.esm.js`,
            format: 'esm',
        },
        {
            banner,
            name,
            file: `dist/${pkg.name}.iife.js`,
            format: 'iife',
        }
    ],
    plugins: [
        json(),
        // resolve(),
        babel({
            extensions: ['.js'],
            babelHelpers: 'bundled',
            "presets": [
                [
                    "@babel/preset-env",
                    {
                    "modules": false
                    }
                ]
            ],
            "env": {
                "test": {
                    "plugins": [
                        "istanbul"
                    ]
                }
            }
        }),
        commonjs(),
        // terser()
    ]
}