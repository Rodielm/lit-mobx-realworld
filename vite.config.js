import { defineConfig } from "vite";

export default defineConfig({
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