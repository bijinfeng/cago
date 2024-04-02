import { useRef, useState } from "react"
import { AdvancedSide } from "./advanced-side"
import { CommonSide } from "./common-side"
import type { RightSideTypes } from "./header"
import { Header } from "./header"
import { RightDrawer } from "@/components/right-drawer"
import { RichEditor } from "@/components/rich-editor"

function Editor() {
  const [rightSideType, setRightSideType] = useState<RightSideTypes>()
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="flex flex-col h-full">
      <Header rightSideType={rightSideType} setRightSideType={setRightSideType} />

      <div className="flex-1 relative" ref={containerRef}>
        <RichEditor />

        <RightDrawer open={rightSideType === "common"} container={containerRef.current}>
          <CommonSide />
        </RightDrawer>
        <RightDrawer open={rightSideType === "advanced"} container={containerRef.current}>
          <AdvancedSide />
        </RightDrawer>
      </div>
    </div>
  )
}

export default Editor
