import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import pkg from "./package.json" assert { type: "json" };
import typescript from "rollup-plugin-typescript2";
import { babel } from "@rollup/plugin-babel";
import tailwind from "tailwindcss";
import filesize from "rollup-plugin-filesize";
import postcss from "rollup-plugin-postcss";
import terser from "@rollup/plugin-terser";

const extensions = [".ts", ".js", ".tsx", "jsx"];

export default [
  {
    input: "src/index.ts",
    output: [
      {
        interop: "auto", //判斷套件內要如何export commonjs用-ssr
        file: pkg.main,
        format: "cjs",
        sourcemap: false,
      },
      {
        file: pkg.module, //csr
        format: "esm",
        sourcemap: false,
      },
    ],
    plugins: [
      peerDepsExternal(), //排除peerDep打包
      resolve(), // node use
      commonjs(), //commonjs support
      typescript({
        tsconfig: "tsconfig.json",
      }), //ts support
      postcss({
        plugins: [tailwind()], //tailwind支援
      }),
      babel({
        babelHelpers: "bundled",
        extensions,
        include: ["src/**/*"],
        exclude: "node_modules/**",
      }), //format to es
      terser(), //壓縮混淆
      filesize(), //show file size
    ],
    onwarn: function (warning) {
      if (warning.code === "THIS_IS_UNDEFINED") {
        return;
      }
      console.error(warning.message);
    },
  },
];
