import { ToggleButton } from "@/components/ToggleButton"
import UnOrderListIcon from "@/components/icon/UnorderList"
import { useEditorContext } from "@/context"

export function UnOrderListButton() {
  const { editor } = useEditorContext()

  return (
    <ToggleButton
      onClick={() => editor.chain().focus().toggleBulletList().run()}
      enabled={editor.can().chain().focus().toggleBulletList().run()}
      actived={editor.isActive("bulletList")}
    >
      <UnOrderListIcon />
    </ToggleButton>
  )
}
