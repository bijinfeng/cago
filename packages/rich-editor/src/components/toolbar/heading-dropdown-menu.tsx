"use client"

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@pingtou/ui"
import type { TElement } from "@udecode/plate-common"
import { collapseSelection, findNode, focusEditor, isBlock, isCollapsed, toggleNodeType, useEditorRef, useEditorSelector } from "@udecode/plate-common"
import { ELEMENT_H1, ELEMENT_H2, ELEMENT_H3, ELEMENT_H4, ELEMENT_H5, ELEMENT_H6 } from "@udecode/plate-heading"
import { ELEMENT_PARAGRAPH } from "@udecode/plate-paragraph"
import React from "react"

import { ToolbarButton } from "@/components/common/toolbar-button"
import { Icons } from "@/components/icons"

const items = [
  {
    value: ELEMENT_PARAGRAPH,
    label: "正文",
    shortcut: "Alt Ctrl 0",
    icon: Icons.paragraph,
  },
  {
    value: ELEMENT_H1,
    label: "标题1",
    shortcut: "Alt Ctrl 1",
    icon: Icons.h1,
  },
  {
    value: ELEMENT_H2,
    label: "标题2",
    shortcut: "Alt Ctrl 2",
    icon: Icons.h2,
  },
  {
    value: ELEMENT_H3,
    label: "标题3",
    shortcut: "Alt Ctrl 3",
    icon: Icons.h3,
  },
  {
    value: ELEMENT_H4,
    label: "标题4",
    shortcut: "Alt Ctrl 4",
    icon: Icons.h4,
  },
  {
    value: ELEMENT_H5,
    label: "标题5",
    shortcut: "Alt Ctrl 5",
    icon: Icons.h5,
  },
  {
    value: ELEMENT_H6,
    label: "标题6",
    shortcut: "Alt Ctrl 6",
    icon: Icons.h6,
  },
]

const defaultItem = items.find(item => item.value === ELEMENT_PARAGRAPH)!

export function HeadingDropdownMenu(props: React.ComponentProps<typeof DropdownMenu>) {
  const value: string = useEditorSelector((editor) => {
    if (isCollapsed(editor.selection)) {
      const entry = findNode<TElement>(editor, {
        match: n => isBlock(editor, n),
      })

      if (entry)
        return items.find(item => item.value === entry[0].type)?.value ?? ELEMENT_PARAGRAPH
    }

    return ELEMENT_PARAGRAPH
  }, [])

  const editor = useEditorRef()

  const { label: selectedItemLabel } = items.find(item => item.value === value) ?? defaultItem

  return (
    <DropdownMenu modal={false} {...props}>
      <DropdownMenuTrigger asChild>
        <ToolbarButton tooltip="Insert" isDropdown>
          <span className="w-10 text-sm">{selectedItemLabel}</span>
        </ToolbarButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start">
        {items.map(({ value: type, label: itemLabel, shortcut, icon: Icon }) => (
          <DropdownMenuCheckboxItem
            key={type}
            checked={type === value}
            className="min-w-56"
            onClick={() => {
              toggleNodeType(editor, { activeType: type })
              collapseSelection(editor)
              focusEditor(editor)
            }}
          >
            <Icon className="mr-2 h-5 w-5" />
            {itemLabel}
            <DropdownMenuShortcut>{shortcut}</DropdownMenuShortcut>
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
