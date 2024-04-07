import { PlateEditor } from "@pingtou/rich-editor"
import React from "react"
import { useDragDropManager } from "react-dnd"

export const RichEditor: React.FC = () => {
  const dndManager = useDragDropManager()

  return (
    <PlateEditor dndManager={dndManager} />
  )
}
