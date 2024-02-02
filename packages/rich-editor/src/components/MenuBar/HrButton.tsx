import { ToggleButton } from "@/components/ToggleButton"
import HrIcon from "@/components/icon/Hr"
import { useEditorContext } from "@/context"

export function HrButton() {
  const { editor } = useEditorContext()

  return (
    <ToggleButton
      onClick={() => editor.chain().focus().setHorizontalRule().run()}
      enabled={editor.can().chain().focus().setHorizontalRule().run()}
      actived={editor.isActive("horizontalRule")}
    >
      <HrIcon />
    </ToggleButton>
  )
}
