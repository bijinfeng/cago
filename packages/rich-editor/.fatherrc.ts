import path from "node:path"
import { defineConfig } from "father"

export default defineConfig({
  esm: {},
  cjs: {},
  alias: {
    "@": path.resolve(__dirname, "./src"),
    "assets": path.resolve(__dirname, "./assets"),
  },
  platform: "browser",
})
