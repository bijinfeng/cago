import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@pingtou/ui"
import { isFunction } from "radash"
import type { ReactNode } from "react"
import { ColorPicker } from "@/components/common/color-picker"
import { ToolbarButton } from "@/components/common/toolbar-button"
import { useColorDropdownMenuState } from "@/hooks/useColorDropdownMenu"

type DropdownMenuProps = React.ComponentProps<typeof DropdownMenu>

type ColorDropdownMenuProps = {
  nodeType: string
  tooltip?: string
  storageKey: string
  hasDefault?: boolean
  hasClear?: boolean
  children?: ReactNode | ((color: string) => ReactNode)
} & Omit<DropdownMenuProps, "children">

export function ColorDropdownMenu(props: ColorDropdownMenuProps) {
  const { nodeType, children, tooltip, storageKey, hasDefault, hasClear } = props

  const state = useColorDropdownMenuState({
    nodeType,
    storageKey,
    closeOnSelect: false,
  })

  const color = state.selectedColor || state.color

  return (
    <DropdownMenu modal={false} open={state.open} onOpenChange={state.onToggle}>
      <DropdownMenuTrigger asChild>
        <ToolbarButton tooltip={tooltip} isDropdown pressed={state.open}>
          {isFunction(children) ? children(color) : children}
        </ToolbarButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" className="p-0">
        <ColorPicker
          value={color}
          hasDefault={hasDefault}
          hasClear={hasClear}
          onChange={state.updateColorAndClose}
          onUpdate={state.updateColor}
          onClear={state.clearColor}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
