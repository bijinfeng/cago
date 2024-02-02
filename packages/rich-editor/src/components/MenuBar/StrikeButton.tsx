import { ToggleButton } from "@/components/ToggleButton"
import StrikeIcon from "@/components/icon/Strike"
import { useEditorContext } from "@/context"

export function StrikeButton() {
  const { editor } = useEditorContext()

  return (
    <ToggleButton
      onClick={() => editor.chain().focus().toggleStrike().run()}
      enabled={editor.can().chain().focus().toggleStrike().run()}
      actived={editor.isActive("strike")}
    >
      <StrikeIcon />
    </ToggleButton>
  )
}
