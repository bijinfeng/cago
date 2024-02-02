import baseTailwindConfig from "@pingtou/ui/tailwind.config"

/** @type {import('tailwindcss').Config} */
export default {
  presets: [baseTailwindConfig],
  darkMode: ["class", "[data-mode=\"dark\"]"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@pingtou/ui/**/*.js",
  ],
}
