import { useLocalStorageState } from "ahooks"
import { useEffect, useState } from "react"
import { ThemeContext } from "./context"
import { USER_THEME } from "@/lib/constants"

const checkSystemDark = () => window.matchMedia("(prefers-color-scheme: dark)").matches
const getSystemTheme = (): KB.ThemeMode => checkSystemDark() ? "dark" : "light"
const getTheme = (theme: KB.Theme): KB.ThemeMode => theme === "system" ? getSystemTheme() : theme

export function ThemeProvider({ children }: React.PropsWithChildren) {
  const [theme = "system", setTheme] = useLocalStorageState<KB.Theme>(USER_THEME)
  const [mode, setMode] = useState<KB.ThemeMode>(() => getTheme(theme))

  const handleThemeChange = (theme: KB.Theme) => {
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
