import { Button, Tooltip, TooltipContent, TooltipTrigger, cn } from "@pingtou/ui"
import React from "react"
import ArrowDownIcon from "@/components/icon/ArrowDown"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  enabled?: boolean
  actived?: boolean
  tooltip?: React.ReactNode
  keyboardShortcut?: React.ReactNode
  withArrowDownIcon?: boolean
}

export const ToggleButton: React.FC<ButtonProps> = (props) => {
  const {
    children,
    enabled = true,
    actived,
    className,
    tooltip,
    keyboardShortcut,
    withArrowDownIcon,
    ...rest
  } = props

  const renderButton = () => (
    <Button
      {...rest}
      disabled={!enabled}
      variant="ghost"
      className={cn(
        "h-[26px] min-w-[26px] rounded-md inline-flex items-center justify-center p-0 text-base",
        { "opacity-25": !enabled, "bg-[#e7e9e8]": actived },
        className,
      )}
    >
      {children}
      {withArrowDownIcon && <ArrowDownIcon />}
    </Button>
  )

  if (!tooltip)
    return renderButton()

  return (
    <Tooltip>
      <TooltipTrigger>{renderButton()}</TooltipTrigger>
      <TooltipContent>
        <div className="text-center">
          <div>{tooltip}</div>
          {keyboardShortcut && <div>{keyboardShortcut}</div>}
        </div>
      </TooltipContent>
    </Tooltip>
  )
}
