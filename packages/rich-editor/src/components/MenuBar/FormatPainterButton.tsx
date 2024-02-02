import FormatPainterIcon from "@/components/icon/FormatPainter"

import { ToggleButton } from "@/components/ToggleButton"

// import { useEditorContext } from "@/context";

export function FormatPainterButton() {
  // const { editor } = useEditorContext();

  return (
    <ToggleButton>
      <FormatPainterIcon />
    </ToggleButton>
  )
}
