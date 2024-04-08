import type { DropdownMenuProps } from "@radix-ui/react-dropdown-menu"
import { ELEMENT_BLOCKQUOTE } from "@udecode/plate-block-quote"
import type {
  TElement,
} from "@udecode/plate-common"
import {
  collapseSelection,
  findNode,
  focusEditor,
  isBlock,
  isCollapsed,
  toggleNodeType,
  useEditorRef,
  useEditorSelector,
} from "@udecode/plate-common"
import { ELEMENT_H1, ELEMENT_H2, ELEMENT_H3 } from "@udecode/plate-heading"
import { ELEMENT_PARAGRAPH } from "@udecode/plate-paragraph"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@pingtou/ui"
import { ToolbarButton } from "./toolbar"
import { Icons } from "@/components/icons"

const items = [
  {
    value: ELEMENT_PARAGRAPH,
    label: "Paragraph",
    description: "Paragraph",
    icon: Icons.paragraph,
  },
  {
    value: ELEMENT_H1,
    label: "Heading 1",
    description: "Heading 1",
    icon: Icons.h1,
  },
  {
    value: ELEMENT_H2,
    label: "Heading 2",
    description: "Heading 2",
    icon: Icons.h2,
  },
  {
    value: ELEMENT_H3,
    label: "Heading 3",
    description: "Heading 3",
    icon: Icons.h3,
  },
  {
    value: ELEMENT_BLOCKQUOTE,
    label: "Quote",
    description: "Quote (⌘+⇧+.)",
    icon: Icons.blockquote,
  },
]

const defaultItem = items.find(item => item.value === ELEMENT_PARAGRAPH)!

export function TurnIntoDropdownMenu(props: DropdownMenuProps) {
  const value: string = useEditorSelector((editor) => {
    if (isCollapsed(editor.selection)) {
      const entry = findNode<TElement>(editor, {
        match: n => isBlock(editor, n),
      })

      if (entry) {
        return (
          items.find(item => item.value === entry[0].type)?.value
          ?? ELEMENT_PARAGRAPH
        )
      }
    }

    return ELEMENT_PARAGRAPH
  }, [])

  const editor = useEditorRef()

  const selectedItem
    = items.find(item => item.value === value) ?? defaultItem
  const { icon: SelectedItemIcon, label: selectedItemLabel } = selectedItem

  return (
    <DropdownMenu modal={false} {...props}>
      <DropdownMenuTrigger asChild>
        <ToolbarButton
          // pressed={}
          tooltip="Turn into"
          isDropdown
          className="lg:min-w-[130px]"
        >
          <SelectedItemIcon className="h-5 w-5 lg:hidden" />
          <span className="max-lg:hidden">{selectedItemLabel}</span>
        </ToolbarButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" className="min-w-0">
        <DropdownMenuLabel>Turn into</DropdownMenuLabel>

        <DropdownMenuRadioGroup
          className="flex flex-col gap-0.5"
          value={value}
          onValueChange={(type) => {
            toggleNodeType(editor, { activeType: type })
            collapseSelection(editor)
            focusEditor(editor)
          }}
        >
          {items.map(({ value: itemValue, label, icon: Icon }) => (
            <DropdownMenuRadioItem
              key={itemValue}
              value={itemValue}
              className="min-w-[180px]"
            >
              <Icon className="mr-2 h-5 w-5" />
              {label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
