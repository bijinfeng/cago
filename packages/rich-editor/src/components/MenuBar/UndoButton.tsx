import { ToggleButton } from "@/components/ToggleButton"
import UndoIcon from "@/components/icon/Undo"
import { useEditorContext } from "@/context"

export function UndoButton() {
  const { editor } = useEditorContext()

  return (
    <ToggleButton
      onClick={() => editor.chain().focus().undo().run()}
      enabled={editor.can().chain().focus().undo().run()}
      tooltip="撤销"
    >
      <UndoIcon />
    </ToggleButton>
  )
}
