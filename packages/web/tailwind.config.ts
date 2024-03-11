import type { Config } from "tailwindcss"

const config: Config = {
  // eslint-disable-next-line ts/no-require-imports
  presets: [require("@pingtou/ui/tailwind.config")],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@pingtou/ui/**/*.js",
  ],
  theme: {},
  plugins: [],
}
export default config
