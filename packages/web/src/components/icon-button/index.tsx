import type { ButtonProps } from "@pingtou/ui"
import { Button, Tooltip, TooltipContent, TooltipTrigger } from "@pingtou/ui"
import React, { forwardRef } from "react"

interface IIconButtonProps extends ButtonProps {
  tooltip?: React.ReactNode
  actived?: boolean
}

export const IconButton = forwardRef<React.ComponentRef<typeof Button>, IIconButtonProps>((props, ref) => {
  const { tooltip, children, actived, ...rest } = props

  const renderButton = () => (
    <Button ref={ref} variant={actived ? "secondary" : "ghost"} size="icon" {...rest}>
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
})
