import { Button, Tooltip, TooltipContent, TooltipTrigger } from "@pingtou/ui"
import { MoonIcon, SunIcon } from "lucide-react"
import React from "react"
import { useTheme } from "./context"

const ThemeCheck: React.FC = () => {
  const { themeMode, setTheme } = useTheme()

  return (
    <Tooltip>
      <TooltipTrigger>
        <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => setTheme(themeMode === "dark" ? "light" : "dark")}>
          {themeMode === "dark" ? <SunIcon size={20} /> : <MoonIcon size={20} />}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        切换主题
      </TooltipContent>
    </Tooltip>
  )
}

export default ThemeCheck
