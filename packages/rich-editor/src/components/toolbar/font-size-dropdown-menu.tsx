import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "@pingtou/ui"
import { getMark, setMarks, useEditorRef, useEditorSelector } from "@udecode/plate-common"
import { MARK_FONT_SIZE } from "@udecode/plate-font"
import { ToolbarButton } from "@/components/common/toolbar-button"

type DropdownMenuProps = React.ComponentProps<typeof DropdownMenu>

const fontSizeItems = [12, 13, 14, 15, 16, 19, 22, 24, 29, 32, 40, 48]
const defaultFontSize = 16

export function FontSizeDropdownMenu(props: DropdownMenuProps) {
  const editor = useEditorRef()

  const fontSize = useEditorSelector(
    editor => getMark(editor, MARK_FONT_SIZE) as number ?? defaultFontSize,
    [],
  )

  return (
    <DropdownMenu modal={false} {...props}>
      <DropdownMenuTrigger asChild>
        <ToolbarButton tooltip="Insert" isDropdown>
          <span className="w-10">
            {fontSize}
            px
          </span>
        </ToolbarButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" className="min-w-24 w-24">
        {fontSizeItems.map(size => (
          <DropdownMenuCheckboxItem
            key={size}
            checked={fontSize === size}
            onClick={() => setMarks(editor, { [MARK_FONT_SIZE]: size })}
          >
            {size}
            px
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
