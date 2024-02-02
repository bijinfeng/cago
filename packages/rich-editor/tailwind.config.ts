import type { Config } from "tailwindcss"

const config: Config = {
  // eslint-disable-next-line ts/no-require-imports
  presets: [require("@pingtou/ui/tailwind.config")],
  darkMode: ["class", "[data-mode=\"dark\"]"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@pingtou/ui/**/*.js",
  ],
  theme: {},
  plugins: [],
}
export default config
