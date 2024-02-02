import { ToggleButton } from "@/components/ToggleButton"
import { Italic } from "@/components/icon"
import { useEditorContext } from "@/context"

export function ItalicButton() {
  const { editor } = useEditorContext()

  return (
    <ToggleButton
      onClick={() => editor.chain().focus().toggleItalic().run()}
      enabled={editor.can().chain().focus().toggleItalic().run()}
      actived={editor.isActive("italic")}
    >
      <Italic />
    </ToggleButton>
  )
}
