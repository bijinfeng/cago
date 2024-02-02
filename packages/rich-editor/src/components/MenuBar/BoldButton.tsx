import { ToggleButton } from "@/components/ToggleButton"
import BoldIcon from "@/components/icon/Bold"
import { useEditorContext } from "@/context"

export function BoldButton() {
  const { editor } = useEditorContext()

  return (
    <ToggleButton
      onClick={() => editor.chain().focus().toggleBold().run()}
      enabled={editor.can().chain().focus().toggleBold().run()}
      actived={editor.isActive("bold")}
    >
      <BoldIcon />
    </ToggleButton>
  )
}
