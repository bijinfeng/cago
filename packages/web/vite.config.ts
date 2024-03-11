import { resolve } from "node:path"
import react from "@vitejs/plugin-react"
import { defineConfig, loadEnv } from "vite"
import svgr from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
  const ENV = { ...process.env, ...loadEnv(mode, process.cwd()) }
  const isDev = ENV.NODE_ENV === "development"

  console.log(isDev)

  return defineConfig({
    base: "/",
    plugins: [react(), svgr()],
    build: {
      target: "esnext",
    },
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
  })
}
