import { useEditorRef } from "@udecode/plate-common"
import { Icons } from "@/components/common/icons"
import { ToolbarButton } from "@/components/common/toolbar-button"

export function PaintToolbarButton() {
  const editor = useEditorRef()

  const handleClick = () => {
    console.log(editor)
  }

  return (
    <ToolbarButton tooltip="格式刷" onClick={handleClick}>
      <Icons.paint size={16} />
    </ToolbarButton>
  )
}
