import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@pingtou/ui"
import React from "react"

import { ToggleButton } from "../ToggleButton"
import { useEditorContext } from "@/context"

export const fontSizeList = [12, 13, 14, 15, 16, 19, 22, 24, 29, 32, 40, 48]

export const FontSizeButton: React.FC = () => {
  const { editor } = useEditorContext()

  const currentFontSize = fontSizeList.find(fontSize =>
    editor.isActive("textStyle", { fontSize: `${fontSize}px` }),
  )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <ToggleButton withArrowDownIcon tooltip="字号调整">
          <span className="w-10 text-sm">
            {currentFontSize && `${currentFontSize}px`}
          </span>
        </ToggleButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {fontSizeList.map(it => (
          <DropdownMenuItem
            key={it}
            onClick={() => editor.chain().focus().setFontSize(`${it}px`).run()}
          >
            {`${it}px`}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
