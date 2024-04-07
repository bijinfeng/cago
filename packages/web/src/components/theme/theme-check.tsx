import { Button, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger, Tooltip, TooltipContent, TooltipTrigger } from "@pingtou/ui"
import type { LucideIcon } from "lucide-react"
import { MoonIcon, SunIcon, SunMoonIcon } from "lucide-react"
import React from "react"
import { useTheme } from "./context"

const THEME_MAPS: Array<{ label: string, value: KB.Theme, icon: LucideIcon }> = [
  {
    label: "默认主题",
    value: "light",
    icon: SunIcon,
  },
  {
    label: "暗黑主题",
    value: "dark",
    icon: MoonIcon,
  },
  {
    label: "跟随系统",
    value: "system",
    icon: SunMoonIcon,
  },
]

const ThemeCheck: React.FC = () => {
  const { theme, setTheme } = useTheme()

  const themeIcon = THEME_MAPS.find(item => item.value === theme)?.icon

  return (
    <Tooltip>
      <TooltipTrigger>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="h-8 w-8">
              {themeIcon && React.createElement(themeIcon, { size: 20 })}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {THEME_MAPS.map(item => (
              <DropdownMenuCheckboxItem
                key={item.value}
                checked={theme === item.value}
                onCheckedChange={() => setTheme(item.value)}
              >
                <div className="flex items-center gap-4">
                  {React.createElement(item.icon, { size: 16 })}
                  <span>{item.label}</span>
                </div>
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </TooltipTrigger>
      <TooltipContent>
        切换主题
      </TooltipContent>
    </Tooltip>

  )
}

export default ThemeCheck
