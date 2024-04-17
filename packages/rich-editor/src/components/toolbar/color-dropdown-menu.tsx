import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@pingtou/ui"
import { useColorDropdownMenu, useColorDropdownMenuState } from "@udecode/plate-font"
import { isFunction } from "radash"
import type { ReactNode } from "react"
import { DEFAULT_COLORS, DEFAULT_CUSTOM_COLORS } from "@/lib/color-constants"
import { ToolbarButton } from "@/components/common/toolbar-button"
import { ColorPicker } from "@/components/common/color-picker"

type DropdownMenuProps = React.ComponentProps<typeof DropdownMenu>

type ColorDropdownMenuProps = {
  nodeType: string
  tooltip?: string
  storageKey: string
  children?: ReactNode | ((color: string) => ReactNode)
} & Omit<DropdownMenuProps, "children">

export function ColorDropdownMenu(props: ColorDropdownMenuProps) {
  const { nodeType, children, tooltip } = props

  const state = useColorDropdownMenuState({
    nodeType,
    colors: DEFAULT_COLORS,
    customColors: DEFAULT_CUSTOM_COLORS,
    closeOnSelect: false,
  })

  const { menuProps, buttonProps } = useColorDropdownMenu(state)

  return (
    <DropdownMenu modal={false} {...menuProps}>
      <DropdownMenuTrigger asChild>
        <ToolbarButton tooltip={tooltip} isDropdown {...buttonProps}>
          {isFunction(children) ? children(state.color) : children}
        </ToolbarButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" className="p-0">
        <ColorPicker
          value={state.selectedColor || state.color}
          onChange={state.updateColorAndClose}
          onUpdate={state.updateColor}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
