import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import pkg from "./package.json" assert { type: "json" };

export default {
  input: "src/index.jsx",
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "esm" },
  ],
  plugins: [
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      presets: ["@babel/preset-env", 
        ["@babel/preset-react", { runtime: "automatic" }],
      ],
    }),
    resolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    }),
    commonjs(),
    terser(),
  ],
  external: Object.keys(pkg.peerDependencies),
};
