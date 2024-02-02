import FormatClearIcon from "@/components/icon/FormatClear"
import { ToggleButton } from "@/components/ToggleButton"
import { useEditorContext } from "@/context"

export function FormatClearButton() {
  const { editor } = useEditorContext()

  return (
    <ToggleButton
      onClick={() => editor.chain().focus().formatClear().run()}
      enabled
    >
      <FormatClearIcon />
    </ToggleButton>
  )
}
