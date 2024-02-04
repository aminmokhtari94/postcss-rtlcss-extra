import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/main.ts",
      name: "PostcssRtlcssExtra",
      fileName: "postcss-rtlcss-extra",
    },
  },
});
