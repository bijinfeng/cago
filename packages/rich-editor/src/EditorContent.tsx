import { EditorContent as BaseEditorContent } from "@tiptap/react"
import React from "react"
import { useEditorContext } from "./context"

export interface EditorContentProps {
  className?: string
  style?: React.CSSProperties
}

export const EditorContent: React.FC<EditorContentProps> = ({
  className,
  style,
}) => {
  const { editor } = useEditorContext()

  return (
    <BaseEditorContent editor={editor} className={className} style={style} />
  )
}
