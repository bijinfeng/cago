import { Popover, PopoverContent, PopoverTrigger } from "@pingtou/ui"
import { isFunction } from "radash"
import type { ReactNode } from "react"
import { ColorPicker } from "@/components/common/color-picker"
import { ToolbarButton } from "@/components/common/toolbar-button"
import { useColorDropdownMenuState } from "@/hooks/useColorDropdownMenu"

type PopoverProps = React.ComponentProps<typeof Popover>

type ColorDropdownMenuProps = {
  nodeType: string
  tooltip?: string
  storageKey: string
  hasDefault?: boolean
  hasClear?: boolean
  children?: ReactNode | ((color: string) => ReactNode)
} & Omit<PopoverProps, "children">

export function ColorDropdownMenu(props: ColorDropdownMenuProps) {
  const { nodeType, children, tooltip, storageKey, hasDefault, hasClear } = props

  const state = useColorDropdownMenuState({
    nodeType,
    storageKey,
    closeOnSelect: false,
  })

  const color = state.selectedColor || state.color

  return (
    <Popover modal={false} open={state.open} onOpenChange={state.onToggle}>
      <PopoverTrigger asChild>
        <ToolbarButton tooltip={tooltip} isDropdown pressed={state.open}>
          {isFunction(children) ? children(color) : children}
        </ToolbarButton>
      </PopoverTrigger>

      <PopoverContent align="start" className="p-0">
        <ColorPicker
          value={color}
          hasDefault={hasDefault}
          hasClear={hasClear}
          onChange={state.updateColorAndClose}
          onUpdate={state.updateColor}
          onClear={state.clearColor}
        />
      </PopoverContent>
    </Popover>
  )
}
