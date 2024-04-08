import type { DropdownMenuProps } from "@radix-ui/react-dropdown-menu"
import { MARK_SUBSCRIPT, MARK_SUPERSCRIPT } from "@udecode/plate-basic-marks"
import { focusEditor, toggleMark, useEditorRef } from "@udecode/plate-common"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@pingtou/ui"
import { ToolbarButton } from "./toolbar"
import { Icons } from "@/components/icons"

export function MoreDropdownMenu(props: DropdownMenuProps) {
  const editor = useEditorRef()

  return (
    <DropdownMenu modal={false} {...props}>
      <DropdownMenuTrigger asChild>
        <ToolbarButton tooltip="Insert">
          <Icons.more />
        </ToolbarButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        className="flex max-h-[500px] min-w-[180px] flex-col gap-0.5 overflow-y-auto"
      >
        <DropdownMenuItem
          onSelect={() => {
            toggleMark(editor, {
              key: MARK_SUBSCRIPT,
              clear: MARK_SUPERSCRIPT,
            })
            focusEditor(editor)
          }}
        >
          <Icons.superscript className="mr-2 h-5 w-5" />
          Superscript
          {/* (⌘+,) */}
        </DropdownMenuItem>
        <DropdownMenuItem
          onSelect={() => {
            toggleMark(editor, {
              key: MARK_SUPERSCRIPT,
              clear: MARK_SUBSCRIPT,
            })
            focusEditor(editor)
          }}
        >
          <Icons.subscript className="mr-2 h-5 w-5" />
          Subscript
          {/* (⌘+.) */}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
