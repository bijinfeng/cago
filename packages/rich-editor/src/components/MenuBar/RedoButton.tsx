import RedoIcon from "@/components/icon/Redo"

import { ToggleButton } from "@/components/ToggleButton"
import { useEditorContext } from "@/context"
import { getKeyboardShortcut } from "@/utils/keyboard-shortcuts"

export function RedoButton() {
  const { editor } = useEditorContext()

  return (
    <ToggleButton
      onClick={() => editor.chain().focus().redo().run()}
      enabled={editor.can().chain().focus().redo().run()}
      tooltip="重做"
      keyboardShortcut={getKeyboardShortcut("redo")}
    >
      <RedoIcon />
    </ToggleButton>
  )
}
