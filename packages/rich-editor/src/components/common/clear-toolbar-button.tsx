import { useEditorRef } from "@udecode/plate-common"
import { Icons } from "@/components/common/icons"
import { ToolbarButton } from "@/components/common/toolbar-button"

export function ClearToolbarButton() {
  const editor = useEditorRef()

  const handleClick = () => {
    console.log(editor)
  }

  return (
    <ToolbarButton tooltip="清除格式" onClick={handleClick}>
      <Icons.eraser size={16} />
    </ToolbarButton>
  )
}
