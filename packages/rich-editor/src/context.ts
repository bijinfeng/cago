import type { Editor } from "@tiptap/react"
import { createContext, useContext } from "react"

export interface EditorState {
  editor: Editor
}

export const EditorContext = createContext({} as EditorState)

export const useEditorContext = () => useContext(EditorContext)
