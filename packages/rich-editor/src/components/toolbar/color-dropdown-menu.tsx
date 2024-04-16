import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@pingtou/ui"
import { useColorDropdownMenu, useColorDropdownMenuState } from "@udecode/plate-font"
import { ColorPicker } from "@/components/common/color-picker"
import { ToolbarButton } from "@/components/common/toolbar-button"
import { DEFAULT_COLORS, DEFAULT_CUSTOM_COLORS } from "@/lib/color-constants"

type DropdownMenuProps = React.ComponentProps<typeof DropdownMenu>

type ColorDropdownMenuProps = {
  nodeType: string
  tooltip?: string
} & DropdownMenuProps

export function ColorDropdownMenu(props: ColorDropdownMenuProps) {
  const { nodeType, children, tooltip } = props

  const state = useColorDropdownMenuState({
    nodeType,
    colors: DEFAULT_COLORS,
    customColors: DEFAULT_CUSTOM_COLORS,
    closeOnSelect: true,
  })

  const { menuProps, buttonProps } = useColorDropdownMenu(state)

  return (
    <DropdownMenu modal={false} {...menuProps}>
      <DropdownMenuTrigger asChild>
        <ToolbarButton tooltip={tooltip} isDropdown {...buttonProps}>
          {children}
        </ToolbarButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start">
        <ColorPicker />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
