import Highlight from "@tiptap/extension-highlight"
import TaskItem from "@tiptap/extension-task-item"
import TaskList from "@tiptap/extension-task-list"
import TextStyle from "@tiptap/extension-text-style"
import Underline from "@tiptap/extension-underline"
import { useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import React from "react"

import { EditorContext } from "@/context"
import { FontSize, FormatClear } from "@/extensions"

export interface EditorConfigProps {
  content?: string
  children?: React.ReactNode
}

export const EditorConfig: React.FC<EditorConfigProps> = (props) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      FormatClear,
      Underline,
      Highlight,
      TaskItem,
      TaskList,
      TextStyle,
      FontSize,
    ],
    content: "<div data-type='draggable-item'><p>Hello World!</p></div>",
  })

  if (!editor)
    return null

  return (
    <EditorContext.Provider value={{ editor }}>
      {props.children}
    </EditorContext.Provider>
  )
}
