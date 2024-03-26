import { useLocalStorageState } from "ahooks"
import { useEffect, useState } from "react"
import { type Theme, ThemeContext, type ThemeMode } from "./context"
import { USER_THEME } from "@/lib/constants"

const checkSystemDark = () => window.matchMedia("(prefers-color-scheme: dark)").matches
const getSystemTheme = (): ThemeMode => checkSystemDark() ? "dark" : "light"
const getTheme = (theme: Theme): ThemeMode => theme === "system" ? getSystemTheme() : theme

export function ThemeProvider({ children }: React.PropsWithChildren) {
  const [theme = "system", setTheme] = useLocalStorageState<Theme>(USER_THEME)
  const [mode, setMode] = useState<ThemeMode>(() => getTheme(theme))

  const handleThemeChange = (theme: Theme) => {
    setTheme(theme)
    setMode(getTheme(theme))
  }

  useEffect(() => {
    if (mode === "dark")
      document.documentElement.classList.add("dark")
    else
      document.documentElement.classList.remove("dark")
  }, [mode])

  return (
    <ThemeContext.Provider value={{ theme, themeMode: mode, setTheme: handleThemeChange }}>
      { children }
    </ThemeContext.Provider>
  )
}

export * from "./context"
