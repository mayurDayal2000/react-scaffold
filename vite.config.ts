import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@pages": resolve(__dirname, "src/pages"),
      "@components": resolve(__dirname, "src/components"),
      "@assets": resolve(__dirname, "src/assets"),
      "@store": resolve(__dirname, "src/store"),
    },
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
});
