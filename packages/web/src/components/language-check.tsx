import { Button, Tooltip, TooltipContent, TooltipTrigger } from "@pingtou/ui"
import React from "react"
import EnIcon from "@/assets/english.svg"

const LanguageCheck: React.FC = () => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Button variant="outline" size="icon" className="h-8 w-8">
          <EnIcon width={20} height={20} />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        English
      </TooltipContent>
    </Tooltip>
  )
}
export default LanguageCheck
