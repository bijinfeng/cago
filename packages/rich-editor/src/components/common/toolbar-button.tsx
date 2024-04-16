import { Button, cn, withTooltip } from "@pingtou/ui"
import React from "react"
import { Icons } from "./icons"

type ButtonRef = React.ElementRef<typeof Button>

interface ButtonProps extends React.ComponentPropsWithoutRef<typeof Button> {
  pressed?: boolean
  isDropdown?: boolean
}

const ToolbarButtonInstance = React.forwardRef<ButtonRef, ButtonProps>((props, ref) => {
  const { children, isDropdown, pressed, className, ...rest } = props

  return (
    <Button
      ref={ref}
      className={cn("p-[5px] h-auto", className)}
      variant={pressed ? "secondary" : "ghost"}
      {...rest}
    >
      {children}

      {isDropdown && <Icons.arrowDown size={16} />}
    </Button>
  )
})

export const ToolbarButton = withTooltip(ToolbarButtonInstance)
