import React from "react"

export interface ThemeState {
  theme: KB.Theme
  themeMode: KB.ThemeMode
  setTheme: (theme: KB.Theme) => void
}

export const ThemeContext = React.createContext<ThemeState>({} as ThemeState)

export const useTheme = () => React.useContext(ThemeContext)
