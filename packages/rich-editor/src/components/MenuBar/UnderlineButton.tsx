import { ToggleButton } from "@/components/ToggleButton"
import UnderlineIcon from "@/components/icon/Underline"
import { useEditorContext } from "@/context"

export function UnderlineButton() {
  const { editor } = useEditorContext()

  return (
    <ToggleButton
      onClick={() => editor.chain().focus().toggleUnderline().run()}
      enabled={editor.can().chain().focus().toggleUnderline().run()}
      actived={editor.isActive("underline")}
    >
      <UnderlineIcon />
    </ToggleButton>
  )
}
