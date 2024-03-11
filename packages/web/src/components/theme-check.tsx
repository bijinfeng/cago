import { Button, Tooltip, TooltipContent, TooltipTrigger } from "@pingtou/ui"
import React from "react"
import DayIcon from "@/assets/day.svg?react"

const ThemeCheck: React.FC = () => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Button variant="outline" size="icon" className="h-8 w-8">
          <DayIcon width={20} height={20} />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        切换主题
      </TooltipContent>
    </Tooltip>
  )
}
export default ThemeCheck
