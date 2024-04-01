import { Sheet, SheetContent } from "@pingtou/ui"
import React from "react"

interface IRightDrawerProps {
  open?: boolean
  container?: HTMLElement | null
  children?: React.ReactNode
  onOpenChange?: (open: boolean) => void
}

export const RightDrawer: React.FC<IRightDrawerProps> = (props) => {
  return (
    <Sheet open={props.open} onOpenChange={props.onOpenChange} modal={false}>
      <SheetContent
        className="absolute"
        side="right"
        hasOverlay={false}
        hasClose={false}
        container={props.container}
      >
        {props.children}
      </SheetContent>
    </Sheet>
  )
}
