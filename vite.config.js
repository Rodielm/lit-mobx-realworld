import { defineConfig } from "vite";
import babel from 'vite-plugin-babel';

export default defineConfig({
  plugins: [
    babel({
      babelConfig: {
        babelrc: false,
        configFile: false,
        plugins: [
          ['@babel/plugin-proposal-decorators', {
            "legacy": true
          }],
          ["@babel/plugin-proposal-class-properties"]
        ]
      }
    })
  ],
  build: {
    lib: {
      entry: 'src/app.js',
      formats: ['es'],
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
})