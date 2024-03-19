import type { ButtonProps } from "@pingtou/ui"
import { Button, Tooltip, TooltipContent, TooltipTrigger } from "@pingtou/ui"
import React from "react"

interface IIconButtonProps extends ButtonProps {
  tooltip?: React.ReactNode
}

export const IconButton: React.FC<IIconButtonProps> = (props) => {
  const { tooltip, children, ...rest } = props

  const renderButton = () => (
    <Button variant="ghost" size="icon" {...rest}>
      {children}
    </Button>
  )

  if (!tooltip)
    return renderButton()

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        {renderButton()}
      </TooltipTrigger>
      <TooltipContent>
        {tooltip}
      </TooltipContent>
    </Tooltip>
  )
}
