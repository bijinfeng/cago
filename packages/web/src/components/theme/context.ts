import React from "react"

export type Theme = "light" | "dark" | "system"
export type ThemeMode = "light" | "dark"

export interface ThemeState {
  theme: Theme
  themeMode: ThemeMode
  setTheme: (theme: Theme) => void
}

export const ThemeContext = React.createContext<ThemeState>({} as ThemeState)

export const useTheme = () => React.useContext(ThemeContext)
