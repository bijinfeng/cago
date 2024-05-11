import type { Config } from "tailwindcss"

const config: Config = {
  // eslint-disable-next-line ts/no-require-imports
  presets: [require("@pingtou/ui/tailwind.config")],
  content: [
    "./renderer/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@pingtou/ui/**/*.js",
    "./node_modules/@pingtou/web/lib/**/*.js",
    "./node_modules/@pingtou/rich-editor/**/*.js",
  ],
  theme: {},
  plugins: [],
}
export default config
