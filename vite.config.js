import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@lifecycle": path.resolve(__dirname, "./src/lifecycle"),
      "@types": path.resolve(__dirname, "./src/types"),
    },
  },
});
